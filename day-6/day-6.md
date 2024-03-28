**ES6 Features:**

ES6, also known as ECMAScript 2015, introduced several new features and enhancements to JavaScript, improving its readability, flexibility, and expressiveness.

### 1. let/const:

- **let:** Declares a block-scoped variable, allowing reassignment.
- **const:** Declares a block-scoped constant, which cannot be reassigned.
- **Example:**

  ```javascript
  let x = 10;
  x = 20; // Valid

  const y = 10;
  y = 20; // Invalid
  ```

### 2. Arrow Functions:

- Provides a concise syntax for writing anonymous functions.
- Automatically binds the context of `this`.
- **Example:**
  ```javascript
  const add = (a, b) => a + b;
  ```

### 3. Template Literals:

- Allow embedding expressions inside strings using `${}`.
- Support multi-line strings without concatenation.
- **Example:**
  ```javascript
  const name = "John";
  console.log(`Hello, ${name}!`);
  ```

### 4. Destructuring:

- Allows unpacking values from arrays or objects into distinct variables.
- Provides a concise syntax for extracting multiple values at once.
- **Example:**
  ```javascript
  const person = { name: "John", age: 30 };
  const { name, age } = person;
  ```

### 5. Spread/Rest Operators:

- **Spread Operator (...):** Allows expanding elements of an array/object into individual elements.
- **Rest Operator (...):** Collects multiple elements into a single array.
- **Example:**

  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const mergedArray = [...arr1, ...arr2];

  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  ```

### 6. Classes:

- Introduces class-based inheritance to JavaScript.
- Provides a more familiar syntax for defining objects and their behavior.
- **Example:**

  ```javascript
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    area() {
      return this.width * this.height;
    }
  }
  ```

### 7. Modules:

- Allows organizing code into separate files or modules.
- Export/import syntax enables sharing functionality between modules.
- **Example:**

  ```javascript
  // Module A (exporting)
  export const greeting = "Hello";

  // Module B (importing)
  import { greeting } from "./moduleA";
  ```
