def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Error! Division by zero."
    return x / y

def percentage(x, y):
    return (x / y) * 100

def calculator():




    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can choose from the following operations:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide
    5. Percentage

    The function takes user input for the choice of operation and two numeric values, then performs the selected operation.

    Exceptions:
    - Handles ValueError if the user inputs non-numeric values.
    - Handles general exceptions and prints an error message.

    Returns:
    - Prints the result of the selected arithmetic operation.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    try:
        choice = input("Enter choice(1/2/3/4/5): ")

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return
        num2 = float(input("Enter second number: "))

        if choice == '1':
            print(f"{num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"{num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
    except Exception as e:
        print(f"An error occurred: {e}")
    else:
        elif choice == '4':
            print(f"{num1} / {num2} = {divide(num1, num2)}")
        elif choice == '5':
            print(f"{num1} is {percentage(num1, num2)}% of {num2}")
    else:
        print("Invalid input")

if __name__ == "__main__":
    calculator()