class CPU {
  freeze(): void {
    console.log("CPU freeze");
  }

  jump(position: string): void {
    console.log(`CPU jump to ${position}`);
  }

  execute(): void {
    console.log("CPU execute");
  }
}

class Memory {
  load(position: string, data: string): void {
    console.log(`Memory load data "${data}" to ${position}`);
  }
}

class HardDrive {
  read(position: string): string {
    return `Data from sector ${position}`;
  }
}

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private hardDrive = new HardDrive();

  start(): void {
    this.cpu.freeze();
    const data = this.hardDrive.read("BOOT_SECTOR");
    this.memory.load("BOOT_ADDRESS", data);
    this.cpu.jump("BOOT_ADDRESS");
    this.cpu.execute();
  }
}

export function runFacadeExample(): void {
  console.log("Facade Pattern");

  const computer = new ComputerFacade();
  computer.start();
}
