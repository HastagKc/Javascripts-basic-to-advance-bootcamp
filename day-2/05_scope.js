// In JavaScript, scope refers to the accessibility and visibility of variables and
// functions within different parts of a program during its execution.
// Understanding scope is crucial for writing maintainable and bug - free code.
// JavaScript has two main types of scope: global scope  and local scope.

// 1. Global Scope:
//    - Variables and functions declared outside of any function or block have global scope.

//    - Global variables and functions can be accessed and modified from anywhere in the program,
//      including inside functions and blocks.

//    - Variables declared with `var` outside of functions become properties of the global object
//      (`window` in browsers, `global` in Node.js).

//    - Variables declared with `let` or `const` outside of functions are also global but
//      not added as properties to the global object.

let globalVar = "I'm global";

function greet() {
  globalVar = "Global is change here";
  console.log(globalVar);
}

console.log(globalVar);
greet();
console.log(globalVar);

// 2. Local Scope:
//    - Variables declared inside a function have local scope, meaning they are accessible only
// within that function.
//    - Each function creates its own scope, and variables declared within it are not visible
// outside of that function.
//    - Nested functions have access to variables declared in their outer scope (closure),
// but the reverse is not true.

function greet() {
  var localVar = "I'm local";
  console.log(localVar);
}

greet(); // Output: I'm local
// console.log(localVar); // Error: localVar is not defined

// 3. Block Scope (introduced in ES6):
//    - Variables declared with `let` and `const` inside a block (e.g., within curly braces `{}`) have block scope.
//    - Block scope restricts the visibility of variables to the block in which they are declared, including `if`, `for`, and `while` blocks.
//    - Variables declared with `var` do not have block scope; they have function scope.

function demo() {
  if (true) {
    let blockVar = "I'm inside a block";
    console.log(blockVar);
  }
  console.log(blockVar); // Error: blockVar is not defined
}
