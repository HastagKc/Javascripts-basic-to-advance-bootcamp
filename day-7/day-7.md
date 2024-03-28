### Advanced JavaScript Topics

#### 1. Closures:

- **Definition:** A closure is a function bundled together with its lexical environment, allowing access to its outer scope even after the outer function has finished executing.
- **Example:**

  ```javascript
  function outer() {
    let name = "John";
    function inner() {
      console.log(name);
    }
    return inner;
  }

  let innerFunction = outer();
  innerFunction(); // Outputs: John
  ```

#### 2. Prototypes:

- **Definition:** In JavaScript, each object has an internal property called [[Prototype]] (often accessible via `__proto__`), which links to another object, known as its prototype. Prototypes allow objects to inherit properties and methods from other objects.
- **Example:**

  ```javascript
  // Constructor function
  function Person(name) {
    this.name = name;
  }

  // Adding a method to the prototype
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  let person1 = new Person("Alice");
  person1.greet(); // Outputs: Hello, my name is Alice
  ```

#### 3. Functional Programming:

- **Definition:** Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It emphasizes immutability, pure functions, and higher-order functions.
- **Example:**

  ```javascript
  // Pure function
  function add(a, b) {
    return a + b;
  }

  // Higher-order function
  function multiplier(factor) {
    return function (x) {
      return x * factor;
    };
  }

  let double = multiplier(2);
  console.log(double(5)); // Outputs: 10

  // Using Array.prototype.map() for functional transformation
  let numbers = [1, 2, 3, 4, 5];
  let doubledNumbers = numbers.map(double);
  console.log(doubledNumbers); // Outputs: [2, 4, 6, 8, 10]
  ```
