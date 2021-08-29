import { Client, Intents } from "discord.js";
import handlePresence from "./background/handlePresence";
import messageCreate from "./event/messageCreate";

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);

  handlePresence(client);
});

client.on("messageCreate", messageCreate);

client.login(process.env.BOT_TOKEN);
