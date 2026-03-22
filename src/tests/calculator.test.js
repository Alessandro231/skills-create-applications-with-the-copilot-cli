const { add, subtract, multiply, divide } = require('../calculator');

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
  });
});
