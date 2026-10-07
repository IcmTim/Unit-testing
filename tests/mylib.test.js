/**
 * Unit tests for mylib (Mocha + Chai, "expect" style).
 *
 * Run with: npm test
 */

'use strict';

const { expect } = require('chai');
const mylib = require('../mylib');

describe('mylib', function () {
  // Runs once before all tests in this suite.
  before(function () {
    console.log('    [before] Starting mylib test suite');
  });

  // Runs once after all tests in this suite.
  after(function () {
    console.log('    [after] mylib test suite finished');
  });

  describe('add()', function () {
    it('adds two positive numbers', function () {
      expect(mylib.add(2, 3)).to.equal(5);
    });

    it('adds negative numbers and zero', function () {
      expect(mylib.add(-2, -3)).to.equal(-5);
      expect(mylib.add(0, 7)).to.equal(7);
    });

    it('handles floating point numbers', function () {
      expect(mylib.add(0.1, 0.2)).to.be.closeTo(0.3, 1e-9);
    });
  });

  describe('subtract()', function () {
    it('subtracts two numbers', function () {
      expect(mylib.subtract(10, 4)).to.equal(6);
    });

    it('returns a negative result when needed', function () {
      expect(mylib.subtract(4, 10)).to.equal(-6);
    });
  });

  describe('multiply()', function () {
    it('multiplies two numbers', function () {
      expect(mylib.multiply(6, 7)).to.equal(42);
    });

    it('returns zero when multiplying by zero', function () {
      expect(mylib.multiply(5, 0)).to.equal(0);
    });
  });

  describe('divide()', function () {
    it('divides two numbers', function () {
      expect(mylib.divide(20, 5)).to.equal(4);
    });

    it('returns a fractional result', function () {
      expect(mylib.divide(1, 4)).to.equal(0.25);
    });

    it('throws an error when the divisor is zero', function () {
      expect(() => mylib.divide(5, 0)).to.throw(Error, /division by zero/);
    });
  });

  describe('input validation', function () {
    it('throws a TypeError for non-numeric input', function () {
      expect(() => mylib.add('1', 2)).to.throw(TypeError);
      expect(() => mylib.subtract(1, undefined)).to.throw(TypeError);
      expect(() => mylib.multiply(null, 2)).to.throw(TypeError);
      expect(() => mylib.divide(NaN, 2)).to.throw(TypeError);
    });
  });
});
