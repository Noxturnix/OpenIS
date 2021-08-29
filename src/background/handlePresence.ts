import { Client } from "discord.js";
import { execSync } from "child_process";

export const setPresence = (client: Client) => {
  client.user?.setPresence({
    activities: [
      {
        name: `Commit ${execSync("git log --format=%cr -n 1 HEAD")}`
      }
    ]
  });
};

export default (client: Client) => {
  setPresence(client);
  let setPresenceInterval = setInterval(setPresence, 60e3, client);
  setPresenceInterval.unref();
};
