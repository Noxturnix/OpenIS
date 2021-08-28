import { ShardingManager } from "discord.js";
import { resolve } from "path";
import loadEnv from "./libs/loadEnv";

loadEnv();

const shardingManager = new ShardingManager(resolve(__dirname, "bot.js"), {
  token: process.env.BOT_TOKEN
});

shardingManager.on("shardCreate", (shard) => {
  shard.on("ready", () => {
    console.log(`Shard ${shard.id} ready`);
  });

  shard.on("error", (error) => {
    console.log(`An error occurred on shard ${shard.id}: ${error.message}`);
  });

  shard.on("disconnect", () => {
    console.log(`Shard ${shard.id} disconnected`);
  });

  shard.on("reconnecting", () => {
    console.log(`Shard ${shard.id} reconnecting`);
  });
});

shardingManager.spawn().catch((reason: Error) => {
  console.log(`Cannot spawning shards: ${reason.message}`);
  process.exit(1);
});
