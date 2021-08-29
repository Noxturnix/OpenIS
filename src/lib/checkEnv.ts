export default () => {
  if (!process.env.BOT_TOKEN) {
    console.error("`BOT_TOKEN` environment variable is not defined");
    process.exit(1);
  }

  process.env.COMMAND_PREFIX = process.env.COMMAND_PREFIX || "&&";
};
