#!/usr/bin/env node

/**
 * Basic CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers
 * - Multiplication (×): Multiply numbers
 * - Division (÷): Divide numbers
 * - Modulo (%): Get remainder of division
 * - Exponentiation (^): Raise to power
 * - Square Root (sqrt): Calculate square root
 */

/**
 * Addition operation
 * Adds two numbers together
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * Subtracts the second number from the first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * Divides the first number by the second
 * @param {number} a - Numerator
 * @param {number} b - Denominator
 * @returns {number} Quotient of a and b
 * @throws {Error} If attempting to divide by zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Modulo operation
 * Returns the remainder of a divided by b
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If attempting to divide by zero
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Exponentiation operation
 * Raises base to the exponent
 * @param {number} base - Base number
 * @param {number} exponent - Exponent value
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * Returns the square root of n
 * @param {number} n - Number to find square root of
 * @returns {number} Square root of n
 * @throws {Error} If attempting to find square root of a negative number
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    console.log('   or: node calculator.js <operation> <number>  (for sqrt)');
    console.log('\nSupported operations:');
    console.log('  +     Addition');
    console.log('  -     Subtraction');
    console.log('  x     Multiplication (also accepts *)');
    console.log('  /     Division');
    console.log('  %     Modulo (remainder)');
    console.log('  ^     Exponentiation (power, also accepts **)');
    console.log('  sqrt  Square root');
    console.log('\nExamples:');
    console.log('  node calculator.js 10 + 5');
    console.log('  node calculator.js 10 % 3');
    console.log('  node calculator.js 2 ^ 8');
    console.log('  node calculator.js sqrt 16');
    process.exit(1);
  }

  // Handle square root separately (single operand)
  if (args[0] === 'sqrt') {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error('Error: Please provide a valid number');
      process.exit(1);
    }
    try {
      const result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  if (args.length < 3) {
    console.error('Error: Please provide both operands');
    console.log('Usage: node calculator.js <number1> <operation> <number2>');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operation = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Please provide valid numbers');
    process.exit(1);
  }

  let result;

  try {
    switch (operation) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case 'x':
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '^':
      case '**':
        result = power(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operation '${operation}'`);
        console.log('Supported operations: +, -, x (or *), /, %, ^ (or **), sqrt');
        process.exit(1);
    }

    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
