// variable in js
// In JavaScript, a variable is a symbolic name for a value. Variables are used to store and manipulate data during the execution of a program. They provide a way to label and reference data, making code more readable and flexible.

// Variables in JavaScript can hold various types of data, including numbers, strings, objects, functions, arrays, and more. Unlike some other programming languages, JavaScript is dynamically typed, meaning you don't need to explicitly declare the type of a variable before assigning a value to it.

var message = "Hello, world!";
// var is a keyword used to declare a variable.
// message is the name of the variable.
// "Hello, world!" is the value assigned to the variable.

// different between let, const and var
// https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

// The main differences between var, let, and const in JavaScript are related to their scoping, hoisting behavior, and reassignment capabilities:

//1) Scope:

// var: Variables declared with var are function-scoped or globally scoped. They are visible throughout the function or globally if declared outside any function.
// let: Variables declared with let are block-scoped. They are only accessible within the block in which they are defined.
// const: Variables declared with const are also block-scoped, like let.

//2) Hoisting:

// var:
// Variables declared with var are hoisted to the top of their function or global scope.They are initialized with the value undefined.
// let:
// Variables declared with let are hoisted to the top of their block scope but are not initialized until their declaration is evaluated.Accessing the variable before the declaration results in a ReferenceError.
// const:
// Like let, variables declared with const are hoisted but are not initialized until their declaration is evaluated.
// Redeclaration and Reassignment:

// var: Variables declared with var can be both redeclared and reassigned within the same scope.
// let: Variables declared with let cannot be redeclared within the same scope, but they can be reassigned.
// const: Variables declared with const cannot be redeclared or reassigned after their initialization. They remain constant throughout their lifetime.
// Initialization Requirement:

// var: Variables declared with var are automatically initialized with undefined.
// let: Variables declared with let are not initialized automatically. They remain uninitialized until a value is assigned to them.
// const: Variables declared with const must be initialized during declaration. Trying to declare a const variable without initialization will result in a SyntaxError.

// in short differences of var, let and const
// 1. var is globally scoped while let and const are blocked scope
// 2. var can be updated and re-declared within its scope
// 3. let can be updated but not re-declared
// 4. const can neither be updated nor re-declared
// 5. var variable are initilized within undefined whereas let and const variables are not initilized
// 6. const must be initilized during declaration unlike let and var
