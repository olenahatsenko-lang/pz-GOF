class AppConfig {
  private static instance: AppConfig;
  private settings: Record<string, string> = {};

  private constructor() {}

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  set(key: string, value: string): void {
    this.settings[key] = value;
  }

  get(key: string): string | undefined {
    return this.settings[key];
  }
}

export function runSingletonExample(): void {
  console.log("Singleton Pattern");

  const config1 = AppConfig.getInstance();
  const config2 = AppConfig.getInstance();

  config1.set("environment", "production");

  console.log(config2.get("environment"));
  console.log(config1 === config2 ? "Both variables contain the same instance" : "Different instances");
}
