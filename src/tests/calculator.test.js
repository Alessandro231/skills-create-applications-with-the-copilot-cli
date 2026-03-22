const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  // Addition Tests
  describe('Addition', () => {
    test('should add 2 + 3 to equal 5 (from example)', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two positive numbers', () => {
      expect(add(10, 20)).toBe(30);
    });

    test('should add negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -5)).toBe(5);
    });

    test('should add zero to a number', () => {
      expect(add(42, 0)).toBe(42);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  // Subtraction Tests
  describe('Subtraction', () => {
    test('should subtract 10 - 4 to equal 6 (from example)', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two positive numbers', () => {
      expect(subtract(20, 8)).toBe(12);
    });

    test('should subtract negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract positive and negative numbers', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(42, 0)).toBe(42);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.2)).toBeCloseTo(6.3);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });
  });

  // Multiplication Tests
  describe('Multiplication', () => {
    test('should multiply 45 * 2 to equal 90 (from example)', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two positive numbers', () => {
      expect(multiply(6, 7)).toBe(42);
    });

    test('should multiply negative numbers', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply by zero', () => {
      expect(multiply(42, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(42, 1)).toBe(42);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should handle large number multiplication', () => {
      expect(multiply(1000, 1000)).toBe(1000000);
    });
  });

  // Division Tests
  describe('Division', () => {
    test('should divide 20 / 5 to equal 4 (from example)', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two positive numbers', () => {
      expect(divide(100, 4)).toBe(25);
    });

    test('should divide negative numbers', () => {
      expect(divide(-12, -3)).toBe(4);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(15, -3)).toBe(-5);
    });

    test('should divide by one', () => {
      expect(divide(42, 1)).toBe(42);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2)).toBe(5.25);
    });

    test('should handle division resulting in decimals', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  // Modulo Tests
  describe('Modulo', () => {
    test('should calculate 5 % 2 to equal 1 (from example)', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should calculate modulo with no remainder', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should calculate modulo with negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should calculate modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should calculate modulo with both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should calculate modulo with decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });

    test('should handle modulo by one', () => {
      expect(modulo(42, 1)).toBe(0);
    });

    test('should handle large number modulo', () => {
      expect(modulo(1000000, 7)).toBe(1);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error when modulo zero by zero', () => {
      expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  // Exponentiation (Power) Tests
  describe('Power (Exponentiation)', () => {
    test('should calculate 2 ^ 3 to equal 8 (from example)', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate power of two positive numbers', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should calculate power with exponent of zero', () => {
      expect(power(42, 0)).toBe(1);
    });

    test('should calculate power with base of zero', () => {
      expect(power(0, 5)).toBe(0);
    });

    test('should calculate power with exponent of one', () => {
      expect(power(42, 1)).toBe(42);
    });

    test('should calculate power with negative exponent', () => {
      expect(power(2, -3)).toBe(0.125);
    });

    test('should calculate power with negative base', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should calculate power with negative base and even exponent', () => {
      expect(power(-2, 4)).toBe(16);
    });

    test('should calculate power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should calculate power with decimal exponent', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large exponents', () => {
      expect(power(2, 10)).toBe(1024);
    });

    test('should calculate square (exponent 2)', () => {
      expect(power(7, 2)).toBe(49);
    });

    test('should calculate cube (exponent 3)', () => {
      expect(power(3, 3)).toBe(27);
    });
  });

  // Square Root Tests
  describe('Square Root', () => {
    test('should calculate sqrt(16) to equal 4 (from example)', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should calculate square root of non-perfect square', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 3);
    });

    test('should calculate square root of decimal number', () => {
      expect(squareRoot(6.25)).toBe(2.5);
    });

    test('should calculate square root of large number', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should calculate square root of small decimal', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should calculate square root of 144', () => {
      expect(squareRoot(144)).toBe(12);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for negative one', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of a negative number');
    });

    test('should throw error for large negative number', () => {
      expect(() => squareRoot(-100)).toThrow('Cannot calculate square root of a negative number');
    });
  });

  // Edge Cases and Integration
  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 0)).toBe(0);
    });

    test('should handle operations with infinity', () => {
      expect(add(Infinity, 100)).toBe(Infinity);
    });

    test('should multiply infinity correctly', () => {
      expect(multiply(Infinity, 2)).toBe(Infinity);
    });

    test('should handle division by negative numbers', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should handle power of zero to zero (special case)', () => {
      expect(power(0, 0)).toBe(1);
    });

    test('should handle square root of infinity', () => {
      expect(squareRoot(Infinity)).toBe(Infinity);
    });

    test('should chain operations: sqrt(power(3, 2))', () => {
      expect(squareRoot(power(3, 2))).toBe(3);
    });
  });
});
