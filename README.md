# json-date-fix [![npm version](https://badge.fury.io/js/json-date-fix.svg)](https://www.npmjs.com/package/json-date-fix)
JSON serialization/deserialization fix for Date objects


```js
import 'json-date-fix' // need once at the root of your app


// serialization fix: preserve timezone information
console.log(JSON.stringify(new Date(2023, 5, 7)));

// deserialization date-string to Date object
console.log(JSON.parse('"2023-06-07T00:00:00.000+03:00"'));


//// Console output:
// "2023-06-07T00:00:00.000+03:00"
// Wed Jun 07 2023 00:00:00 GMT+0300 (Moscow Standard Time)
```


Example with DateOnly format support
```js
import jsonDateFix from './index.js'; 
jsonDateFix({ dateonly: true });  // enable dateonly format ('yyyy-MM-dd') analysis 


// deserialization dateonly-string to Date object
console.log(JSON.parse('"2023-06-07"'));

//// Console output:
// Wed Jun 07 2023 00:00:00 GMT+0300 (Moscow Standard Time)
```