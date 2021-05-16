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

## Referências

- Jest:
  - [indicação do `ts-jest` para checar tipagem](<(https://jestjs.io/docs/getting-started#using-typescript)>);
- ts-jest:
  - [Repo](https://github.com/kulshekhar/ts-jest);
  - [Docs](https://kulshekhar.github.io/ts-jest/).
