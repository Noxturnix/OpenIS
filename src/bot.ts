import { Client } from "discord.js";

const client = new Client({ intents: [] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.login(process.env.BOT_TOKEN);
