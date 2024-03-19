// Arithmetic operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("Addition:", a + b); // Output: 15
console.log("Subtraction:", a - b); // Output: 5
console.log("Multiplication:", a * b); // Output: 50
console.log("Division:", a / b); // Output: 2
console.log("Modulus:", a % b); // Output: 0
console.log("Increment:", a++); // Output: 10
console.log("Decrement:", b--); // Output: 5
console.log("a:", a); // Output: 11
console.log("b:", b); // Output: 4

// Assignment operators
console.log("\nAssignment Operators:");
let x = 10;
x += 5; // Equivalent to: x = x + 5;
console.log("x:", x); // Output: 15

// Comparison operators
console.log("\nComparison Operators:");
let num1 = 10;
let num2 = 20;
console.log("Equal to:", num1 == num2); // Output: false
console.log("Not Equal to:", num1 != num2); // Output: true
console.log("Strict Equal to:", num1 === num2); // Output: false
console.log("Strict Not Equal to:", num1 !== num2); // Output: true
console.log("Greater than:", num1 > num2); // Output: false
console.log("Less than:", num1 < num2); // Output: true
console.log("Greater than or Equal to:", num1 >= num2); // Output: false
console.log("Less than or Equal to:", num1 <= num2); // Output: true

// Logical operators
console.log("\nLogical Operators:");
let bool1 = true;
let bool2 = false;
console.log("Logical AND:", bool1 && bool2); // Output: false
console.log("Logical OR:", bool1 || bool2); // Output: true
console.log("Logical NOT:", !bool1); // Output: false

// Conditional (ternary) operator
console.log("\nConditional (Ternary) Operator:");
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message); // Output: "You are an adult"
