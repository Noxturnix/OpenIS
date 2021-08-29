import type { MessageCommand } from "../interface/MessageCommand";
import createCommandString from "../lib/createCommandString";

const messageCommands: MessageCommand[] = [
  {
    command: [createCommandString("ping")],
    fn(functionCall) {
      functionCall.message.reply("pong");
    }
  }
];

export default messageCommands;
