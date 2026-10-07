/**
 * Main program: imports mylib and runs each of its functions.
 *
 * Run with: node main.js
 */

'use strict';

const mylib = require('./mylib');

console.log('add(2, 3)       =', mylib.add(2, 3));
console.log('subtract(10, 4) =', mylib.subtract(10, 4));
console.log('multiply(6, 7)  =', mylib.multiply(6, 7));
console.log('divide(20, 5)   =', mylib.divide(20, 5));

try {
  mylib.divide(1, 0);
} catch (err) {
  console.log('divide(1, 0)    -> error:', err.message);
}
