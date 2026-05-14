import { runFactoryMethodExample } from "../src/creational/factory-method";
import { runAbstractFactoryExample } from "../src/creational/abstract-factory";
import { runBuilderExample } from "../src/creational/builder";
import { runSingletonExample } from "../src/creational/singleton";

import { runAdapterExample } from "../src/structural/adapter";
import { runFacadeExample } from "../src/structural/facade";
import { runDecoratorExample } from "../src/structural/decorator";

import { runStrategyExample } from "../src/behavioral/strategy";
import { runObserverExample } from "../src/behavioral/observer";

function separator(): void {
  console.log("\n----------------------------------------\n");
}

runFactoryMethodExample();
separator();

runAbstractFactoryExample();
separator();

runBuilderExample();
separator();

runSingletonExample();
separator();

runAdapterExample();
separator();

runFacadeExample();
separator();

runDecoratorExample();
separator();

runStrategyExample();
separator();

runObserverExample();
