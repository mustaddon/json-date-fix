# json-date-fix [![npm version](https://badge.fury.io/js/json-date-fix.svg)](https://www.npmjs.com/package/json-date-fix)
JSON serialization/deserialization fix for Date objects

```js
import 'json-date-fix' // need once at the root of your app

// serialization fix: preserve timezone information
console.log(JSON.stringify({ date: new Date(2023, 5, 7) }));

// deserialization fix: change date-string to date-object
console.log(JSON.parse('{"date":"2023-06-07T00:00:00.000+03:00"}'));


//// Console output:
// {"date":"2023-06-07T00:00:00.000+03:00"}
// {date: Wed Jun 07 2023 00:00:00 GMT+0300 (Moscow Standard Time)}
```
