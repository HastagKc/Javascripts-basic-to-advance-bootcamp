/* 

What is Lexical Scope?
Let’s start with the concept of lexical scope. Lexical scope, also known as static scope, refers to how variable access is determined at the time of writing the code, based on the physical placement of variables and functions in the code. In simpler terms, lexical scope is all about where a variable or function is declared within your code.

*/

function outer() {
  const message = "Hello, ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const greet = outer();
greet("kshittiz");

/* 
In this code, the outer function defines a variable called message and an inner function inner. When the outer function is invoked, it returns the inner function. Subsequently, we assign the returned inner function to the greet variable and then call greet("Alice").

The important thing to note here is that the inner function has access to the message variable, even though it's declared in the outer function. This is because JavaScript uses lexical scoping, meaning it looks for variables in the scope where the function was defined, not where it was called. In this case, inner has access to message because it's lexically scoped within outer.

*/

/*
What is a Closure?
A closure is closely related to lexical scope. It occurs when a function “remembers” the variables from its outer lexical scope, even after that outer function has finished executing. 
This behavior allows functions to maintain access to their parent’s variables, even if they would normally go out of scope.
*/
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counter = createCounter();

// console.log(counter()); // Outputs: 1
// console.log(counter()); // Outputs: 2
// In this example, the createCounter function returns an anonymous function. This returned function forms a closure over the count variable declared in its outer scope. Every time we call counter(), it increments and returns the count variable, which persists between function calls because of the closure.

// Why are Closures Important?
// Closures are a powerful tool in JavaScript and have many practical uses. They are often used for data encapsulation, emulating private variables, and creating factory functions.
function createPrivateCounter() {
  let count = 0;

  return {
    increment: function () {
      return ++count;
    },
    get: function () {
      return count;
    },
  };
}

const privateCounter = createPrivateCounter();

console.log(privateCounter.increment()); // Outputs: 1
console.log(privateCounter.increment()); // Outputs: 2
console.log(privateCounter.get()); // Outputs: 2
