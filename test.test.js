const Calculator = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(-1, -1)).toBe(0);
        expect(calculator.subtract(-1, 1)).toBe(-2);
    });

    test('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-2, -3)).toBe(6);
        expect(calculator.multiply(-2, 3)).toBe(-6);
    });

    test('should divide two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, -3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Division by zero is not allowed.');
    });
});