class Computer {
  public cpu = "";
  public ram = "";
  public storage = "";

  showConfiguration(): string {
    return `Computer configuration: CPU=${this.cpu}, RAM=${this.ram}, Storage=${this.storage}`;
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

export function runBuilderExample(): void {
  console.log("Builder Pattern");

  const computer = new ComputerBuilder()
    .setCPU("Intel Core i7")
    .setRAM("32 GB")
    .setStorage("1 TB SSD")
    .build();

  console.log(computer.showConfiguration());
}
