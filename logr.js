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
    , levels = ['log', 'debug', 'error', 'info', 'warn'];

  function canLog(obj, fn) {
    return 'console' in obj && typeof obj.console[fn] === 'function';
  }

  logr.execute = function (level) {
    var args = slice.call(arguments, 1)
      , msg
      , cb;

    if (args.length === 1) {
      msg = typeof args[0] === 'string' ? args[0] : ''; 
    } else if (args.length > 1) {
      msg = args[0];
      cb = args[args.length - 1];
    }
    
    if (typeof cb === 'function') {
      cb.apply(this, args.pop());
    } else if (canLog(scope, level)) {
      scope.console[level].apply(scope.console, args);
    }
  
    return logr;
  };

  return logr;
}));
