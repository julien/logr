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

  var slice = Array.prototype.slice
    , levels = ['log', 'debug', 'error', 'info', 'warn'];

  function canLog(obj, fn) {
    return 'console' in obj && typeof obj.console[fn] === 'function';
  }

  logr.create = function (level, category, transport) {
    level = levels[level] ? level : levels[0];
    category = typeof category === 'string' ? category : '';

    obj = {
      log: function () {
        var prev = category ? [category] : []
          , args = prev.concat(slice.call(arguments, 0));

        if (typeof transport === 'function') {
          transport.apply(this, args);
        } else if (canLog(root, level)){
          root.console[level].apply(root.console[level], args);
        }
        return obj;
      }
    };
    return obj;
  };
  return logr;
}));
