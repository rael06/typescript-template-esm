import { singleton } from "tsyringe";
import fetch from "node-fetch";

@singleton()
export default class Fetcher {
  public async fetch(
    ...params: Parameters<typeof fetch>
  ): ReturnType<typeof fetch> {
    return await fetch(params[0], params[1]);
  }
}
