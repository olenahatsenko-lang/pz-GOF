class OldPaymentSystem {
  makePaymentInDollars(amount: number): string {
    return `Paid ${amount} USD using old payment system`;
  }
}

interface PaymentProcessor {
  pay(amountInUah: number): string;
}

class PaymentAdapter implements PaymentProcessor {
  constructor(private oldPaymentSystem: OldPaymentSystem) {}

  pay(amountInUah: number): string {
    const exchangeRate = 40;
    const amountInDollars = amountInUah / exchangeRate;

    return this.oldPaymentSystem.makePaymentInDollars(amountInDollars);
  }
}

export function runAdapterExample(): void {
  console.log("Adapter Pattern");

  const oldSystem = new OldPaymentSystem();
  const adapter = new PaymentAdapter(oldSystem);

  console.log(adapter.pay(4000));
}
