//Asynchronous JavaScript

// Asynchronous programming in JavaScript is essential for handling operations that may take 
// some time to complete, such as fetching data from a server or reading a file. 
// It allows your code to continue executing while waiting for these operations to finish, 
// improving overall performance and responsiveness.


//  1. Callbacks:
//  Callbacks are functions passed as arguments to other functions, to be executed later 
// once an operation has completed.

     function fetchData(callback) {
         // Simulating fetching data from a server
         setTimeout(() => {
             callback("Data fetched successfully");
         }, 2000);
     }

     fetchData((data) => {
         console.log(data);
     });


     // callback hell
/* 

Callback hell, also known as "pyramid of doom," refers to a situation in asynchronous 
JavaScript programming where code becomes difficult to read and maintain due to multiple 
nested callbacks. This typically occurs when dealing with multiple asynchronous operations 
that depend on each other or have to be executed sequentially. 
Callback hell arises because callbacks are often nested within each other, leading to code 
that looks like a pyramid, hence the term "pyramid of doom."

*/


// 2. Promises:
   // Promises represent the eventual completion or failure of an asynchronous operation and allow chaining 
   //multiple asynchronous operations.
  
     function fetchData() {
         return new Promise((resolve, reject) => {
             // Simulating fetching data from a server
             setTimeout(() => {
                 resolve("Data fetched successfully");
             }, 2000);
         });
     }

     fetchData()
         .then((data) => {
             console.log(data);
         })
         .catch((error) => {
             console.error(error);
         });


//3. Async/Await:

//    Async/Await is a modern syntax introduced in ES2017, providing a more readable and
//     synchronous-looking way to write asynchronous code.
   
     async function fetchData() {
         return new Promise((resolve) => {
             // Simulating fetching data from a server
             setTimeout(() => {
                 resolve("Data fetched successfully");
             }, 2000);
         });
     }

     async function getData() {
         try {
             const data = await fetchData();
             console.log(data);
         } catch (error) {
             console.error(error);
         }
     }

     getData();
    






