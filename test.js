class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Example usage:
const calculator = new Calculator();

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${calculator.add(num1, num2)}`);
console.log(`Subtraction: ${num1} - ${num2} = ${calculator.subtract(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${calculator.multiply(num1, num2)}`);
console.log(`Division: ${num1} / ${num2} = ${calculator.divide(num1, num2)}`);