using System;

class Program
{
    const int MaxElements = 100;

    static int Sum(int[] array, int length)
    {
        int result = 0;
        for (int i = 0; i < length; i++)
        {
            result += array[i];
        }
        return result;
    }

    static int GetNumberOfElements()
    {
        int numberOfElements;
        Console.Write("Enter the number of elements (1-100): ");
        if (!int.TryParse(Console.ReadLine(), out numberOfElements) || numberOfElements < 1 || numberOfElements > MaxElements)
        {
            Console.WriteLine("Invalid input. Please enter a number between 1 and 100.");
            Environment.Exit(1);
        }
        return numberOfElements;
    }

    static int[] GetElements(int numberOfElements)
    {
        int[] elements = new int[numberOfElements];
        Console.WriteLine($"Enter {numberOfElements} integers:");
        for (int i = 0; i < numberOfElements; i++)
        {
            Console.Write($"Element {i + 1}: ");
            if (!int.TryParse(Console.ReadLine(), out elements[i]))
            {
                Console.WriteLine("Invalid input. Please enter an integer.");
                Environment.Exit(1);
            }
        }
        return elements;
    }

    static void Main()
    {
        int numberOfElements = GetNumberOfElements();
        int[] elements = GetElements(numberOfElements);
        int sum = Sum(elements, numberOfElements);
        Console.WriteLine($"The sum of the elements is: {sum}");
    }
}