import type { MessageCommand } from "../interface/MessageCommand";
import createCommandString from "../lib/createCommandString";

const messageCommands: MessageCommand[] = [
  {
    command: [createCommandString("ping")],
    fn(functionCall) {
      functionCall.message.reply("pong");
    }
  },
  {
    command: [createCommandString("pong")],
    fn(functionCall) {
      functionCall.message.reply("ping?");
    }
  }
];

export default messageCommands;
