abstract class Transport {
  abstract deliver(): string;
}

class Truck extends Transport {
  deliver(): string {
    return "Delivery by land using a truck";
  }
}

class Ship extends Transport {
  deliver(): string {
    return "Delivery by sea using a ship";
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport = this.createTransport();
    console.log(transport.deliver());
  }
}

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}

export function runFactoryMethodExample(): void {
  console.log("Factory Method Pattern");

  const roadLogistics = new RoadLogistics();
  roadLogistics.planDelivery();

  const seaLogistics = new SeaLogistics();
  seaLogistics.planDelivery();
}
