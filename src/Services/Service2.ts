import { singleton } from "tsyringe";

@singleton()
export default class Service2 {
  public getName() {
    return "I am Service2";
  }
}
