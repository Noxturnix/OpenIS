import { config } from "dotenv";
import checkEnv from "./checkEnv";

export default () => {
  config();
  checkEnv();
};
