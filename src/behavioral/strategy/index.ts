interface RouteStrategy {
  buildRoute(start: string, end: string): string;
}

class CarRouteStrategy implements RouteStrategy {
  buildRoute(start: string, end: string): string {
    return `Car route from ${start} to ${end}`;
  }
}

class WalkingRouteStrategy implements RouteStrategy {
  buildRoute(start: string, end: string): string {
    return `Walking route from ${start} to ${end}`;
  }
}

class Navigator {
  constructor(private strategy: RouteStrategy) {}

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  buildRoute(start: string, end: string): void {
    console.log(this.strategy.buildRoute(start, end));
  }
}

export function runStrategyExample(): void {
  console.log("Strategy Pattern");

  const navigator = new Navigator(new CarRouteStrategy());
  navigator.buildRoute("Kyiv", "Lviv");

  navigator.setStrategy(new WalkingRouteStrategy());
  navigator.buildRoute("Campus", "Library");
}
