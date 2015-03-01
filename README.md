default-assign
==============

ES6 Object.assign() like functionality, but does not replace existing properties, and is recursive.


## Usage

```js
var defaultAssign = require('default-assign');

// does not overwrite equal keys
defaultAssign({foo: 0, bar: 1}, {bar: 2, baz: 2});
//=> {foo: 0, bar: 1, baz: 2}

// multiple sources
defaultAssign({foo: 0, bar: 1}, {bar: 2}, {baz: 3});
//=> {foo: 0, bar: 1, baz: 3}

// recursive
defaultAssign({foo: 0, bar: {barA: 1, barB: 2}}, {bar: {barA: 2, barC: 3}});
//=> {foo: 0, bar: {barA: 1, barB: 2, barC: 3}}

// ignores null and undefined sources
defaultAssign({foo: 0, bar: 1}, null, {bar: 2, baz: 2}, undefined);
//=> {foo: 0, bar: 1, baz: 2}
```


## API

### defaultAssign(target, source, [source, ...])

Assigns enumerable own properties of `source` objects recursively to the `target` object if `undefined` and returns the `target` object.


## Resources
Based off of the [ES6 Object.assign polyfill by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

## Licence
MIT
