logr
====

A super simple log help for JavaScript

usage
====
+ Create a logger

```
var logLogger, devLog;
logLogger = logr({level:'log'});
devLog = logLogger('DEVLOG');
devLog({ name: 'an object' });
```

+ or this way...

```
logr({level: 'log'})('stuff')({name: 'bob the lizard'});
```

+ or chain it forever ...

```
logr({level: 'log'})('stuff')({name: 'bob the lizard'})
    ({level: 'error'})('SHIT HAPPENS')({error: 'he threw up'})
    ({level: 'warn'})('I WARNED YOU')({data: 'something here'});
```

+ or if you don't want to use console.log|debug|error|info|warn, 
specify your own function (xhr, whatever ...)

```
logr({level: 'debug', transport: function (message, data) {
  // xhr.send ...
}})('MOAR')({message: 'winter is coming'});
```



