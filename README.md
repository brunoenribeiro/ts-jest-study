# Estudo: Jest & TypeScript

## Stack

- Jest 26.x
- TypeScript 4.x
- Node 14.x

## Anotações

### Compatibilidade com TS

Jest é compatível com TypeScript via Babel.

É possível adicionar o preset `@babel/preset-typescript` ao `babel.config.js` para que o jest seja capaz de transpilar arquivos `.test.ts`, mas isso não inclui validação de tipagem.

Para tal, a documentação do jest indica instalar `ts-jest`.

### Tipagem de módulos mockados

O TypeScript não reconhece sozinho que `jest.mock('foo')` adiciona métodos aos módulos. É preciso avisá-lo de outras maneiras.

- Sem `ts-jest`, elencar módulo com `(foo as unknown) as jest.Mock<Foo>`: [link](https://stackoverflow.com/questions/48759035/mock-dependency-in-jest-with-typescript/52366601#comment108370458_52366601);
- Com `ts-jest`, usar util `mocked`: [link](https://stackoverflow.com/a/60007123/7948938).

## Referências

- Jest:
  - [indicação do `ts-jest` para checar tipagem](https://jestjs.io/docs/getting-started#using-typescript);
- ts-jest:
  - [Repo](https://github.com/kulshekhar/ts-jest);
  - [Docs](https://kulshekhar.github.io/ts-jest/).
