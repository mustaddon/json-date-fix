# json-date-fix [![npm version](https://badge.fury.io/js/json-date-fix.svg)](https://www.npmjs.com/package/json-date-fix)
Memory usage optimization in cascading iterable queries

```js
import 'json-date-fix' // need once at the root of your app

// serialization fix: preserve timezone information
console.log(JSON.stringify({date:new Date()}));

// deserialization fix: replace date-string to date-object
console.log(JSON.parse('{"date":"2022-08-28T19:19:55.813+03:00"}'));


//// Console output:
// {"date":"2022-08-28T19:19:55.813+03:00"}
// {date: Sun Aug 28 2022 19:19:55 GMT+0300 (Moscow Standard Time)}
```
