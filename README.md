logr
====

A super simple log helper for JavaScript

### Usage

+ Create a basic logger and log stuff

```
var logger = logr.create();
logger.log('one', 2, ['three', 4]);
```

+ create a "logger" with a given category and log...

```
var logLogger = logr.create('log', 'DEV_LOG');
logLogger.log('hello', 'world');

// or this way 
// (will use console.info instead of console.log)

var infoLogger = logr.create('info', 'INFO_LOG');
infoLogger
  .log('hello', 'world')
  .log({hello: 'world'})
  .log(['hello', 'world']);
```

+ You can also specify a function as the last
  argument to `logr.create` method and it will be 
  invoked instead of `console.log|debug|error|info|warn`

```
var logger = logr.create(info, null, function () {
  var xhr = new XMLHttpRequest()
    , args = Array.prototype.slice.call(arguments, 0);

  // ... send log messages to a server 

});
```

+ You can also directly log, just using `logr.create`

```
logr.create().log('foo').log({bar: 'baz'}).log(['one', 'two', 'three']);
```

+ `logr` exposes itself as a browser global an AMD module or a CommonJS module.


### License

This software is licensed under the MIT License.

Copyright Julien Castelain, 2013-2014.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


