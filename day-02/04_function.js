// A function is a block of reusable code that performs a specific task or calculates a value.
// Functions allow you to break down your code into smaller, more manageable pieces,
// making it easier to organize and maintain your codebase.

// Defining a function named "greet"
function greet() {
  console.log("Good Morning");
}

// Calling the function
greet();

// types of function in js
// 1) Named function
function add(a, b) {
  console.log(a + b);
}
add(20, 25);

// 2) Function expression
// Function expressions involve assigning an anonymous function to a variable.
// They are often used when the function needs to be passed as an argument to another function
//  or when you want to create a function dynamically.

let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 10));

// An anonymous function is a function that is defined without a name.
// Instead of declaring a function with a specific identifier,
//  you define the function inline wherever it's needed.
// Anonymous functions are commonly used in JavaScript for
// various purposes, such as callbacks, event handlers, and function expressions.

// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Using the forEach method with an anonymous function as a callback

numbers.forEach(function (num) {
  console.log(num * 2);
});

// 3) Arrow Function

// Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise syntax for 
// writing JavaScript functions.
// They offer a more compact and expressive way to define functions compared to
//  traditional function expressions.
// Arrow functions are particularly useful for short, one - liner functions
//  and for preserving the lexical scope of this.

const double = (x) => {
  console.log(x * 2);
};

double(20);

const square = (x) => x * x;
console.log(square(50));
