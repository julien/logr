'use strict';

var assert = require('assert')
  , logr = require('./logr');

assert.strictEqual(typeof logr, 'object', 'logr should be an object');
assert.strictEqual(typeof logr.execute, 'function', 'logr.execute should be defined as a function');
assert.strictEqual(logr.execute(), logr, 'should return logr');

