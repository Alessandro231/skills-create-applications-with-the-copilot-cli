const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator', () => {
  // addition tests
  describe('add (addition)', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    test('adds a positive and a negative number', () => {
      expect(add(10, -4)).toBe(6);
    });
    test('adds two negative numbers', () => {
      expect(add(-3, -7)).toBe(-10);
    });
    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  // subtraction tests
  describe('subtract (subtraction)', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });
    test('subtracts a larger number from a smaller one', () => {
      expect(subtract(3, 8)).toBe(-5);
    });
    test('subtracts zero', () => {
      expect(subtract(7, 0)).toBe(7);
    });
  });

  // multiplication tests
  describe('multiply (multiplication)', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });
    test('multiplies two negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });
    test('multiplies a positive and a negative number', () => {
      expect(multiply(3, -4)).toBe(-12);
    });
  });

  // division tests
  describe('divide (division)', () => {
    test('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });
    test('divides a number by 1', () => {
      expect(divide(7, 1)).toBe(7);
    });
    test('throws an error on division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
    test('divides to produce a decimal', () => {
      expect(divide(1, 4)).toBeCloseTo(0.25);
    });
  });

  // modulo tests
  describe('modulo', () => {
    test('returns the remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });
    test('returns zero when evenly divisible', () => {
      expect(modulo(9, 3)).toBe(0);
    });
    test('returns the remainder for a smaller dividend', () => {
      expect(modulo(2, 5)).toBe(2);
    });
    test('throws an error on modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });
    test('modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });
  });

  // power (exponentiation) tests
  describe('power (exponentiation)', () => {
    test('raises a number to a positive power', () => {
      expect(power(2, 10)).toBe(1024);
    });
    test('raises a number to the power of 0', () => {
      expect(power(5, 0)).toBe(1);
    });
    test('raises a number to the power of 1', () => {
      expect(power(7, 1)).toBe(7);
    });
    test('raises a number to a negative power', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });
    test('raises 0 to a positive power', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  // squareRoot tests
  describe('squareRoot (square root)', () => {
    test('returns the square root of a positive number', () => {
      expect(squareRoot(9)).toBe(3);
    });
    test('returns the square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });
    test('returns a decimal square root', () => {
      expect(squareRoot(2)).toBeCloseTo(1.4142);
    });
    test('throws an error for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow(
        'Cannot calculate the square root of a negative number'
      );
    });
    test('square root of a perfect square', () => {
      expect(squareRoot(144)).toBe(12);
    });
  });
});
