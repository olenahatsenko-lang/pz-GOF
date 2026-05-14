interface Notifier {
  send(message: string): string;
}

class BasicNotifier implements Notifier {
  send(message: string): string {
    return `Email notification: ${message}`;
  }
}

class SMSNotifierDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): string {
    return `${this.notifier.send(message)} + SMS notification: ${message}`;
  }
}

class TelegramNotifierDecorator implements Notifier {
  constructor(private notifier: Notifier) {}

  send(message: string): string {
    return `${this.notifier.send(message)} + Telegram notification: ${message}`;
  }
}

export function runDecoratorExample(): void {
  console.log("Decorator Pattern");

  let notifier: Notifier = new BasicNotifier();
  notifier = new SMSNotifierDecorator(notifier);
  notifier = new TelegramNotifierDecorator(notifier);

  console.log(notifier.send("System alert"));
}
