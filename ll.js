//Reverse a String: Write a function that reverses a given string.
//Reverse a string 
//Example 1:
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
console.log(reverseString("louay"))

//Example 2:
function ollehString(str) {
    let reserved = "";
    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i])
    }
}

ollehString("Reverse a string");

//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(inputString) {
    return inputString.length;
}
console.log(countCharacters("the number of characters in a string"))

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
//example 1:
var sentence = 'Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.';

var capitalizesString = (str) => str[0].toUpperCase() +
    str.slice(1).tolowercase();

var capitalizesString = (str) => str.split(' ').map
    (capitalizesString).join(' ');

console.log(capitalizeWords(sentence));
// example 2:
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence."));

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

//Function to find the maximum value in an array
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let max = arr[0]; // Assume the first element is the maximum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger element is found
        }
    }

    return max;
}
var numbers = [3, 7, 0, 2, 9, 10];
console.log("Maximum Value:", findMax(numbers));

// Function to find the minimum value in an array
function findMin(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for an empty array
    }

    let min = arr[0]; // Assume the first element is the minimum

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if a smaller element is found
        }
    }

    return min;
}
var numbers = [3, 7, 0, 2, 9, 10];
console.log("Minimum Value:", findMin(numbers));
console.log("Array:", numbers);

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    let sum = 0; // Initialize sum to 0

    // Iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Add the current element to the sum
    }

    return sum; // Return the total sum
}

var numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);
console.log("Sum of Array:", sumArray(numbers));

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filterArray(arr, condition) {
    let filteredArray = [];

    // Iterate through each element of the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element satisfies the condition
        if (condition(arr[i])) {
            filteredArray.push(arr[i]); // Add the element to the filtered array
        }
    }

    return filteredArray; // Return the filtered array
}


var numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

// Filter out even numbers
var evenNumbers = filterArray(numbers, function (num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// Filter out odd numbers
var oddNumbers = filterArray(numbers, function (num) {
    return num % 2 !== 0;
});
console.log("Odd Numbers:", oddNumbers);

//Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    // Base case: If n is 0 or 1, factorial is 1
    if (n === 0 || n === 1) {
        return 1;
    } else {
        // Recursive case: factorial(n) = n * factorial(n-1)
        return n * factorial(n - 1);
    }
}
var number = 5;
console.log("Number:", number);
console.log("Factorial:", factorial(number));

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    // 1 and numbers less than or equal to 1 are not prime
    if (num <= 1) {
        return false;
    }

    // 2 and 3 are prime
    if (num <= 3) {
        return true;
    }

    // Check for divisibility by numbers up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            // If num is divisible by any number, it's not prime
            return false;
        }
    }

    // If num is not divisible by any number up to its square root, its prime
    return true;
}
var number = 16;
console.log("Number:", number);
console.log("Is Prime:", isPrime(number));
//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function generateFibonacci(n) {
    var fibonacciSequence = [0, 1]; // Initialize Fibonacci sequence with the first two terms

    // Generate Fibonacci sequence up to n terms
    for (var i = 2; i < n; i++) {
        var nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2]; // Calculate the next term
        fibonacciSequence.push(nextTerm); // Add the next term to the sequence
    }

    return fibonacciSequence; // Return the Fibonacci sequence
}
var numberOfTerms = "Fibonacci";
console.log("Number of Terms:", numberOfTerms);
console.log("Fibonacci Sequence:", generateFibonacci(numberOfTerms));