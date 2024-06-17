## Static and Heap Memory


In JavaScript, primitive types (e.g., `number`, `string`, `boolean`) are stored in stack memory, while non-primitive types (e.g., `objects`, `arrays`) are stored in heap memory. The behavior of assignment and modification differs between these two types due to their memory handling.

### Example Explanation

#### Primitive Types (Stack Memory)
Primitive types are stored directly on the stack. When you assign one primitive to another, a copy is made.

```javascript
let name = 'Kshittiz';
let anotherName = name;
anotherName = 'Ram';

console.log(name); // Output: 'Kshittiz'
console.log(anotherName); // Output: 'Ram'
```

In this case:
- `name` and `anotherName` are stored on the stack.
- When `anotherName` is assigned `name`, it copies the value `'Kshittiz'`.
- Changing `anotherName` to `'Ram'` does not affect `name`.

#### Non-Primitive Types (Heap Memory)
Non-primitive types are stored in the heap, and the variable holds a reference to the memory location. When you assign one non-primitive to another, both variables refer to the same object in the heap.

```javascript
let obj1 = {
    name: 'Kshittiz',
    age: 22,
    email: 'chaudharykshittiz@gmail.com'
};

let obj2 = obj1;
obj2.name = 'Ram';

console.log(obj1.name); // Output: 'Ram'
console.log(obj2.name); // Output: 'Ram'
```

In this case:
- `obj1` is stored in the heap, and `obj1` holds a reference to this object.
- When `obj2` is assigned `obj1`, it holds the same reference to the object in the heap.
- Changing `obj2.name` to `'Ram'` affects `obj1` as well since both variables refer to the same object.

### Summary
- **Primitive Types (Stack Memory)**: Stored directly in stack memory. Assigning one primitive to another copies the value, so they are independent.
- **Non-Primitive Types (Heap Memory)**: Stored in heap memory. Assigning one non-primitive to another copies the reference, so they point to the same object.

### Complete Example Code
```javascript
// Primitive types (stack memory)
let name = 'Kshittiz';
let anotherName = name;
anotherName = 'Ram';

console.log(name); // Output: 'Kshittiz'
console.log(anotherName); // Output: 'Ram'

// Non-primitive types (heap memory)
let obj1 = {
    name: 'Kshittiz',
    age: 22,
    email: 'chaudharykshittiz@gmail.com'
};

let obj2 = obj1;
obj2.name = 'Ram';

console.log(obj1.name); // Output: 'Ram'
console.log(obj2.name); // Output: 'Ram'
```

This illustrates the different behaviors of stack and heap memory in JavaScript.