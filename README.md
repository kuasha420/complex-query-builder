# complexQueryBuilder - http_build_query of JavaScript

[![Star IT Ltd](https://staritltd.com/wp-content/uploads/2019/10/Web_Logo_of_Star_IT_158x80.png)](https://staritltd.com)

🔥 http_build_query of JavaScript 🔥

complex-query-builder can be used to mimic the behavior of http_build_query available in PHP. It's useful for building complex Query for WordPress and Other Rest API where data type of array and deeply nested arrays are required.

- Written on TypeScript.
- Fully typed and ready for consumption in any JavaScript or TypeScript project.
- Works on Node, Browser and React Native.

This library uses `querystring` package for escape characters.

<!-- TOC -->

- [complexQueryBuilder - http_build_query of JavaScript](#complexquerybuilder---http_build_query-of-javascript)
  - [Installation & Usage](#installation--usage)
    - [For node, react-native or any project where you have dependency management](#for-node-react-native-or-any-project-where-you-have-dependency-management)
      - [Using Named Exports](#using-named-exports)
        - [TypeScript ESM](#typescript-esm)
        - [JavaScript Require Syntax](#javascript-require-syntax)
    - [For Browser](#for-browser)
  - [APIS](#apis)
    - [complexQueryBuilder](#complexquerybuilder)
    - [Types](#types)
  - [License](#license)
  - [Contribution](#contribution)

<!-- /TOC -->

## Installation & Usage

### For node, react-native or any project where you have dependency management

Install with your favorite package manager.

Using Yarn:

```
yarn add complex-query-builder
```

Using NPM:

```
npm i complex-query-builder

```

Now you can import specific functions or the factory function from the module using commonjs or esm statements.

#### Using Named Exports

##### TypeScript ESM

```typescript
import complexQueryBuilder, { QueryObject } from 'complex-query-builder';
```

##### JavaScript Require Syntax

```javascript
const complexQueryBuilder = require('complex-query-builder');
```

### For Browser

Add a script tag with the umd bundle from unpkg or release page.

```html
<script src="https://unpkg.com/complex-query-builder"></script>
```

Now you will have `CQB` global in your hand with all functions to use!

```html
<script>
  // Create a Barikoi Instance
  const complexQueryBuilder = CQB.complexQueryBuilder;
</script>
```

## APIS

### complexQueryBuilder

```ts
import complexQueryBuilder, { QueryObject } from 'complex-query-builder';

const query1: QueryObject = {
  page: 10,
  theme: 'dark',
  features: ['view', 'edit', 'notify'],
  highContrast: false,
  date: {
    day: 15,
    month: 12,
    year: 2020,
  },
};

console.log(complexQueryBuilder(query1));
// output> page=10&theme=dark&features[0]=view&features[1]=edit&features[2]=notify&highContrast=false&date[day]=15&date[month]=12&date[year]=2020

// with parent
console.log(complexQueryBuilder(query1, 'dashboard'));
// output> dashboard[page]=10&dashboard[theme]=dark&dashboard[features][0]=view&dashboard[features][1]=edit&dashboard[features][2]=notify&dashboard[highContrast]=false&dashboard[date][day]=15&dashboard[date][month]=12&dashboard[date][year]=2020
```

### Types

```ts
type Primitives = string | number | boolean;

type PrimitivesArray = (Primitives | QueryObject)[];

interface QueryObject {
  [key: string]: Primitives | PrimitivesArray | QueryObject;
}

const complexQueryBuilder: (
  obj: QueryObject | PrimitivesArray,
  parent?: string | undefined
) => string;
```

## License

This package is licensed under the MIT License.

## Contribution

Any kind of contribution is welcome. Thanks!
