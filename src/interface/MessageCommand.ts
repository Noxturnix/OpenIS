import { Message } from "discord.js";

export interface MessageCommandFunctionCall {
  message: Message;
  args: string[];
  matchedCommand: string;
  fromBot: boolean;
}

export interface MessageCommand {
  command: string[];
  fn(functionCall: MessageCommandFunctionCall): any;
  allowBot?: boolean;
}
