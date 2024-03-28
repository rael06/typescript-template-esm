import "./extensions";
import "reflect-metadata";
import { container } from "tsyringe";
import Service1 from "./Services/Service1";
import Fetcher from "./Services/Fetcher";

async function start() {
  console.log("Application starts...");

  console.log("Resolving_services...".toCamelCase());

  const service1 = container.resolve(Service1);
  service1.doSomething();

  const serviceFetch = container.resolve(Fetcher);
  const response = await serviceFetch.fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const json = await response.json();
  console.log(json);

  console.log("Application ends...");
}

start();
