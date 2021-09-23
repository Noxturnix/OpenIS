import { Message } from "discord.js";
import messageCommands from "../command/messageCommands";
import { MessageCommandFunctionCall } from "../interface/MessageCommand";

export default (message: Message) => {
  commandLoop: for (let i = 0; i < messageCommands.length; i++) {
    let messageCommand = messageCommands[i];
    let trimmedMessage = message.content.trim();

    if (!message.author.bot || messageCommand.allowBot) {
      for (let j = 0; j < messageCommand.command.length; j++) {
        let command = messageCommand.command[j].trim();
        let compareMessage = messageCommand.ignoreCase
          ? trimmedMessage.toLowerCase()
          : trimmedMessage;
        let compareCommand = messageCommand.ignoreCase ? command.toLowerCase() : command;

        if (compareMessage === compareCommand || compareMessage.startsWith(compareCommand + " ")) {
          let commandArgs = trimmedMessage
            .substr(command.length)
            .trimStart()
            .split(" ")
            .filter((arg) => arg);

          let messageCommandFunctionCall: MessageCommandFunctionCall = {
            message,
            args: commandArgs,
            matchedCommand: command,
            fromBot: message.author.bot
          };

          messageCommand.fn(messageCommandFunctionCall);

          break commandLoop;
        }
      }
    }
  }
};
