#Практичне заняття виконано відповідно до вимог репозиторію PIS-VITI-22/pz-GOF.


## Тема

Реалізація GoF патернів проєктування з використанням TypeScript.

## Мета роботи

Мета практичного заняття — навчитися застосовувати класичні патерни проєктування GoF для покращення архітектури програмних рішень, зменшення зв’язності між компонентами та підвищення гнучкості коду.

## Реалізовані патерни

У проєкті реалізовано такі групи патернів:

### Породжувальні патерни

- Factory Method
- Abstract Factory
- Builder
- Singleton

### Структурні патерни

- Adapter
- Facade
- Decorator

### Поведінкові патерни

- Strategy
- Observer

## Структура проєкту

```text
pz-GOF/
├── src/
│   ├── creational/
│   │   ├── factory-method/
│   │   ├── abstract-factory/
│   │   ├── builder/
│   │   └── singleton/
│   ├── structural/
│   │   ├── adapter/
│   │   ├── facade/
│   │   └── decorator/
│   └── behavioral/
│       ├── strategy/
│       └── observer/
├── examples/
│   └── run-all.ts
├── .editorconfig
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## Як запустити

1. Встановіть залежності:
```bash
npm install
```

2. Запустіть усі приклади:
```bash
npm run start
```
