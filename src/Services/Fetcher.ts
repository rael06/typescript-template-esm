import { singleton } from "tsyringe";

const fetch = import("node-fetch");
type Fetch = Awaited<typeof fetch>;

@singleton()
export default class Fetcher {
  public async fetch(
    ...params: Parameters<Fetch["default"]>
  ): ReturnType<Fetch["default"]> {
    return (await fetch).default(params[0], params[1]);
  }
}
