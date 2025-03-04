class Calculator {
    add(x, y) {
        return x + y;
    }

    subtract(x, y) {
        return x - y;
    }

    multiply(x, y) {
        return x * y;
    }

    divide(x, y) {
        if (y === 0) {
            throw new Error("Error! Division by zero.");
        }
        return x / y;
    }
}

function main() {
    const calculator = new Calculator();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Welcome to the Calculator!");
    console.log("Options:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Quit");

    readline.question("Enter your choice (1/2/3/4/5): ", choice => {
        if (choice === '5') {
            console.log("Thanks for using the calculator!");
            readline.close();
            return;
        }

        readline.question("Enter the first number: ", num1 => {
            readline.question("Enter the second number: ", num2 => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);

                let result;
                try {
                    switch (choice) {
                        case '1':
                            result = calculator.add(num1, num2);
                            console.log(`Result: ${num1} + ${num2} = ${result}`);
                            break;
                        case '2':
                            result = calculator.subtract(num1, num2);
                            console.log(`Result: ${num1} - ${num2} = ${result}`);
                            break;
                        case '3':
                            result = calculator.multiply(num1, num2);
                            console.log(`Result: ${num1} * ${num2} = ${result}`);
                            break;
                        case '4':
                            result = calculator.divide(num1, num2);
                            console.log(`Result: ${num1} / ${num2} = ${result}`);
                            break;
                        default:
                            console.log("Invalid choice. Please try again.");
                    }
                } catch (error) {
                    console.log(error.message);
                }

                readline.close();
            });
        });
    });
}

main();