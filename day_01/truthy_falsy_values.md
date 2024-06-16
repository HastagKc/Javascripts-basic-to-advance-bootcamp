### Falsy Values in js

In JavaScript, "falsy" values are those that evaluate to `false` when converted to a Boolean context. There are exactly eight falsy values:

1. `false`
2. `0` (zero)
3. `-0` (negative zero)
4. `0n` (BigInt zero)
5. `""` (empty string)
6. `null`
7. `undefined`
8. `NaN` (Not-a-Number)

### Examples of Falsy Values

Here are examples demonstrating each of these falsy values:

1. **`false`**:

   ```javascript
   let my_value = false;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

2. **`0`**:

   ```javascript
   let my_value = 0;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

3. **`-0`**:

   ```javascript
   let my_value = -0;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

4. **`0n`**:

   ```javascript
   let my_value = 0n;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

5. **`""`** (empty string):

   ```javascript
   let my_value = "";
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

6. **`null`**:

   ```javascript
   let my_value = null;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

7. **`undefined`**:

   ```javascript
   let my_value = undefined;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

8. **`NaN`**:
   ```javascript
   let my_value = NaN;
   let valueToBool = Boolean(my_value);
   console.log(valueToBool); // Output: false
   console.log(typeof valueToBool); // Output: boolean
   ```

### Code Example with All Falsy Values

Here's a complete example demonstrating all falsy values:

```javascript
let falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

falsyValues.forEach((value) => {
  let valueToBool = Boolean(value);
  console.log(`${value} -> ${valueToBool}`); // Output: false for all values
  console.log(typeof valueToBool); // Output: boolean for all values
});
```

When you run this code, it will convert each falsy value to a Boolean, resulting in `false` for all of them, and print the type as `"boolean"`.

### Example with `0`:

Here’s how you can modify your original code to get `false`:

```javascript
let my_number = 0; // Assigns the value 0 to the variable my_number
let numToBool = Boolean(my_number); // Converts my_number to a Boolean value, which will be false
console.log(numToBool); // Output: false
console.log(typeof numToBool); // Output: boolean
```

By using `0` or any other falsy value, `numToBool` will be `false` and its type will be `"boolean"`.

### Truthy Values in js

In JavaScript, all values that are not considered "falsy" are "truthy". These truthy values will convert to `true` when evaluated in a Boolean context. Here are some examples of truthy values:

1. Any non-zero number (positive or negative)
2. Non-empty strings
3. Objects
4. Arrays
5. Functions
6. `true`
7. Any other values that are not in the list of falsy values

### Examples of Truthy Values

Here are some examples that demonstrate different types of truthy values:

1. **Non-zero numbers:**

   ```javascript
   let my_number = 42;
   let numToBool = Boolean(my_number);
   console.log(numToBool); // Output: true
   console.log(typeof numToBool); // Output: boolean
   ```

2. **Non-empty strings:**

   ```javascript
   let my_string = "Hello, world!";
   let strToBool = Boolean(my_string);
   console.log(strToBool); // Output: true
   console.log(typeof strToBool); // Output: boolean
   ```

3. **Objects:**

   ```javascript
   let my_object = { key: "value" };
   let objToBool = Boolean(my_object);
   console.log(objToBool); // Output: true
   console.log(typeof objToBool); // Output: boolean
   ```

4. **Arrays:**

   ```javascript
   let my_array = [1, 2, 3];
   let arrToBool = Boolean(my_array);
   console.log(arrToBool); // Output: true
   console.log(typeof arrToBool); // Output: boolean
   ```

5. **Functions:**

   ```javascript
   let my_function = function () {
     return "Hello";
   };
   let funcToBool = Boolean(my_function);
   console.log(funcToBool); // Output: true
   console.log(typeof funcToBool); // Output: boolean
   ```

6. **`true`:**
   ```javascript
   let my_boolean = true;
   let boolToBool = Boolean(my_boolean);
   console.log(boolToBool); // Output: true
   console.log(typeof boolToBool); // Output: boolean
   ```

### Example Code with a Truthy Value

Here's a full example using a non-zero number, which is a truthy value:

```javascript
let my_number = 42; // Assigns the value 42 to the variable my_number
let numToBool = Boolean(my_number); // Converts my_number to a Boolean value, which will be true
console.log(numToBool); // Output: true
console.log(typeof numToBool); // Output: boolean
```

In this example:

- `my_number` is assigned the value `42`, which is truthy.
- `Boolean(my_number)` converts `42` to `true`.
- `console.log(numToBool)` outputs `true`.
- `console.log(typeof(numToBool))` outputs `"boolean"`.
