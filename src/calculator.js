/**
 * Node.js CLI Calculator App
 * Supports the following operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - squareRoot
 */

/**
 * Performs addition of two numbers.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} a - The minuend.
 * @param {number} b - The subtrahend.
 * @returns {number} The difference of a and b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} a - The first factor.
 * @param {number} b - The second factor.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Performs division of two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 * @throws {Error} Throws an error if division by zero is attempted.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Performs modulo operation (remainder of division).
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of a divided by b.
 * @throws {Error} Throws an error if modulo by zero is attempted.
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Performs exponentiation (power) of a base raised to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} The result of base raised to the power of exponent.
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculates the square root of a number.
 * @param {number} n - The number to find the square root of.
 * @returns {number} The square root of n.
 * @throws {Error} Throws an error if n is negative.
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate the square root of a negative number');
  }
  return Math.sqrt(n);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
