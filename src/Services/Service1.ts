import { singleton } from "tsyringe";
import Service2 from "./Service2";

@singleton()
export default class Service1 {
  public constructor(
    // This is a dependency injection
    private service2: Service2
  ) {}

  public async doSomething() {
    console.log(`${this.service2.getName()} called from Service1`);
  }
}
