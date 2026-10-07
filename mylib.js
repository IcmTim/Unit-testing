/**
 * mylib - a small library of basic arithmetic operations.
 *
 * @module mylib
 */

'use strict';

/**
 * Checks that a value is a finite number.
 *
 * @param {*} value - Value to check.
 * @throws {TypeError} If the value is not a finite number.
 */
function assertNumber(value) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new TypeError(`Expected a finite number, got: ${String(value)}`);
  }
}

/**
 * Adds two numbers.
 *
 * @param {number} a - First addend.
 * @param {number} b - Second addend.
 * @returns {number} The sum a + b.
 */
function add(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a + b;
}

/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - Minuend.
 * @param {number} b - Subtrahend.
 * @returns {number} The difference a - b.
 */
function subtract(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a - b;
}

/**
 * Multiplies two numbers.
 *
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product a * b.
 */
function multiply(a, b) {
  assertNumber(a);
  assertNumber(b);
  return a * b;
}

/**
 * Divides the first number by the second.
 *
 * @param {number} a - Dividend.
 * @param {number} b - Divisor (must not be 0).
 * @returns {number} The quotient a / b.
 * @throws {Error} If the divisor is zero (ZeroDivision).
 */
function divide(a, b) {
  assertNumber(a);
  assertNumber(b);
  if (b === 0) {
    throw new Error('ZeroDivisionError: division by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
