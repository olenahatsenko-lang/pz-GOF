interface Button {
  render(): string;
}

interface Checkbox {
  render(): string;
}

class WindowsButton implements Button {
  render(): string {
    return "Render Windows button";
  }
}

class WindowsCheckbox implements Checkbox {
  render(): string {
    return "Render Windows checkbox";
  }
}

class MacButton implements Button {
  render(): string {
    return "Render MacOS button";
  }
}

class MacCheckbox implements Checkbox {
  render(): string {
    return "Render MacOS checkbox";
  }
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

function renderUI(factory: GUIFactory): void {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  console.log(button.render());
  console.log(checkbox.render());
}

export function runAbstractFactoryExample(): void {
  console.log("Abstract Factory Pattern");

  renderUI(new WindowsFactory());
  renderUI(new MacFactory());
}
