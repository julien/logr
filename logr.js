(function(root, factory) {
  // AMD.
  if (typeof define === 'function' && define.amd) {
    define(['exports'], function(exports) {
      root.logr = factory(root, exports);
    });
  // Node.js/CommonJS.
  } else if (typeof exports !== 'undefined') {
    factory(root, exports);
  // browser global.
  } else {
    root.logr = factory(root, {});
  }
}(this, function(root, logr) {

  var scope = this
    , slice = Array.prototype.slice
    , levels = ['log', 'debug', 'error', 'info', 'warn', 'time', 'timeEnd'];

  function canLog(obj, fn) {
    return 'console' in obj && typeof obj.console[fn] === 'function';
  }

  logr.execute = function () {
    var args = slice.call(arguments, 0)
      , level = (levels.indexOf(args[0]) !== -1) ? args[0] : levels[0]
      , cb = args[args.length - 1];

    if (typeof cb === 'function') {
      cb.apply(null, args);
    } else if (canLog(scope, level)) {
      args = [args.pop()];      
      scope.console[level].apply(scope.console, args);
    }
  
    return logr;
  };

  return logr;
}));
