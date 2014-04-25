logr
====

A super simple log helper for JavaScript

### Examples

```
logr.execute('log', 'A log message')
  .execute('info', 'An info message')
  .execute('debug', 'A debug message'); 

// Returns logr object so can be chained
```

```
logr.execute('log', 'A log message', {hello: 'world'}, function () {
  console.log('Received: ', arguments);    
});

// Received: ["A log message", Object, function]
```

```
logr.execute('log', 'A log message', {hello: 'world'}, function () {
  var xhr = new XMLHttpRequest()
    , fd = new FormData();

  fd.append('message', new Date().toLocaleString() + ' ' +  JSON.stringify(Array.prototype.slice.call(arguments, 0)));
  xhr.open('POST', '/log');
  xhr.send(fd);
});

```

```
logr.execute('time', 'time01');

setTimeout(function () {
  logr.execute('timeEnd', 'time01');
}, 4000);
// Example output 
// time time01
// timeEnd time01

```

```
var logr = require('logr');
logr.execute('log', 'hello', {name: 'joe'});
```


+ `logr` exposes itself as a browser global an AMD module or a CommonJS module.


### License

This software is licensed under the MIT License.

Copyright Julien Castelain, 2013-2014.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



