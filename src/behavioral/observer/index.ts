interface Observer {
  update(message: string): void;
}

class User implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received notification: ${message}`);
  }
}

class NewsPublisher {
  private observers: Observer[] = [];

  subscribe(observer: Observer): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter(item => item !== observer);
  }

  publish(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

export function runObserverExample(): void {
  console.log("Observer Pattern");

  const publisher = new NewsPublisher();

  const user1 = new User("User 1");
  const user2 = new User("User 2");

  publisher.subscribe(user1);
  publisher.subscribe(user2);

  publisher.publish("New article about GoF patterns");
}
