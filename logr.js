/*jslint indent: 2*/
(function (exports) {
  'use strict';

  var logr,
    levels,
    xhr,
    hasConsole;

  levels = ['log', 'debug', 'error', 'info', 'warn'];

  hasConsole = function (obj, fn) {
    return (!!obj.console && typeof obj.console[fn] === 'function');
  };

  if (typeof exports.logr === 'undefined') {
    logr = exports.logr = function (opts) {
      var level, transport;
      opts = opts || {};

      level = levels[opts.level] || levels[0];
      transport = opts.transport;

      return function (message) {
        message = (typeof message === 'string' && !!message) ? message : '';

        return function () {
          var args = [message].concat([].slice.call(arguments, 0));

          if (typeof transport === 'function') {
            transport.apply(null, args);
          } else if (hasConsole(exports, level)) {
            exports.console[level].apply(exports.console, args);
          }
          return exports.logr;
        };
      };
    };
  }
}(this));
