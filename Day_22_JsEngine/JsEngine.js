// Js Engine
// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=0s

// 1. Lexical Analysis
// 2. Parsing
// 3. Code Generation
// 1. Lexical Analysis
// The first step in the JavaScript engine is lexical analysis, where the source code is broken down into tokens.
// Tokens are the smallest units of meaning in the code, such as keywords, identifiers, literals, and operators. 
// For example, in the code snippet below, the tokens would be "let", "x", "=", "10", and ";".
let x = 10;
// 2. Parsing
// The next step is parsing, where the tokens are analyzed to create an Abstract Syntax Tree (AST).
// The AST is a tree-like structure that represents the syntactic structure of the code.
// For example, the AST for the code snippet above would have a variable declaration node with a child node representing the variable name "x" and another child node representing the value "10".
// 3. Code Generation
// The final step is code generation, where the AST is transformed into executable code that can be run by the JavaScript engine.
// The generated code is typically in the form of bytecode or machine code, which can be executed by the underlying hardware. 
// The JavaScript engine optimizes the generated code for performance, allowing for efficient execution of JavaScript programs.
// In summary, the JavaScript engine processes the source code through lexical analysis, parsing, and code generation to execute JavaScript programs efficiently.
// Example of JavaScript Engine in action
function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15

// In this example, the JavaScript engine will perform lexical analysis to break down the code into tokens, parse the tokens to create an AST, and then generate executable code to run the add function and log the result to the console.
// Output:
// 15

// The JavaScript engine is responsible for executing the code and producing the output.
// In this case, it will execute the add function with the arguments 5 and 10, and then log the result (15) to the console.
// In conclusion, the JavaScript engine is a crucial component of the JavaScript runtime environment that processes and executes JavaScript code efficiently through lexical analysis, parsing, and code generation.
// Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Note: The JavaScript engine is a complex and sophisticated piece of software that has evolved over time, with various implementations such as V8 (used in Chrome and Node.js), SpiderMonkey (used in Firefox), and JavaScriptCore (used in Safari). Each engine may have its own optimizations and features, but they all follow the general principles of lexical analysis, parsing, and code generation to execute JavaScript code efficiently.
// In summary, the JavaScript engine is a powerful tool that allows developers to write and execute JavaScript code efficiently, making it an essential part of the web development ecosystem.


// Example of JavaScript Engine in action with asynchronous code
console.log("Start");
setTimeout(() => {
    console.log("This is a callback function");
}, 2000);
console.log("End");
// Output:
// Start
// End
// This is a callback function (after 2 seconds)

// In this example, the JavaScript engine will execute the synchronous code first, logging "Start" and "End" to the console.
// Then, it will handle the asynchronous code by adding the callback function to the event queue after 2 seconds.
// Once the call stack is empty, the event loop will take the callback function from the event queue and execute it, logging "This is a callback function" to the console.
// This demonstrates how the JavaScript engine handles both synchronous and asynchronous code efficiently, allowing for non-blocking execution of tasks.

// In conclusion, the JavaScript engine is a powerful and sophisticated component of the JavaScript runtime environment that processes and executes JavaScript code efficiently through lexical analysis, parsing, and code generation. It allows developers to write both synchronous and asynchronous code, making it an essential tool for web development and beyond. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Note: The JavaScript engine is a complex and evolving piece of software, with various implementations and optimizations. It continues to evolve to meet the demands of modern web development and provide better performance and features for developers and users alike.
// In summary, the JavaScript engine is a crucial component of the JavaScript runtime environment that processes and executes JavaScript code efficiently, allowing developers to create dynamic and interactive web applications.
// Example of JavaScript Engine in action with asynchronous code and promises
console.log("Start");
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is a resolved promise");
    }, 2000);
});
promise.then((message) => {
    console.log(message);
});
console.log("End");
// Output:
// Start
// End
// This is a resolved promise (after 2 seconds)
// In this example, the JavaScript engine will execute the synchronous code first, logging "Start" and "End" to the console.
// Then, it will handle the asynchronous code by creating a promise that resolves after 2 seconds.
// Once the promise is resolved, the .then() method will be called, and the message "This is a resolved promise" will be logged to the console.
// This demonstrates how the JavaScript engine handles both synchronous and asynchronous code efficiently, allowing for non-blocking execution of tasks and providing support for promises and other asynchronous patterns.
// In conclusion, the JavaScript engine is a powerful and sophisticated component of the JavaScript runtime environment that processes and executes JavaScript code efficiently through lexical analysis, parsing, and code generation. It allows developers to write both synchronous and asynchronous code, making it an essential tool for web development and beyond. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Note: The JavaScript engine is a complex and evolving piece of software, with various implementations and optimizations. It continues to evolve to meet the demands of modern web development and provide better performance and features for developers and users alike.
// In summary, the JavaScript engine is a crucial component of the JavaScript runtime environment that processes and executes JavaScript code efficiently, allowing developers to create dynamic and interactive web applications.

// Example of JavaScript Engine in action with asynchronous code and async/await
console.log("Start");
async function asyncFunction() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("This is an async function");
        }, 2000);
    });
}
asyncFunction().then((message) => {
    console.log(message);
});
console.log("End");
// Output:
// Start
// End
// This is an async function (after 2 seconds)

// In this example, the JavaScript engine will execute the synchronous code first, logging "Start" and "End" to the console.
// Then, it will handle the asynchronous code by creating an async function that returns a promise that resolves after 2 seconds.
// Once the promise is resolved, the .then() method will be called, and the message "This is an async function" will be logged to the console.
// This demonstrates how the JavaScript engine handles both synchronous and asynchronous code efficiently, allowing for non-blocking execution of tasks and providing support for async/await syntax for easier handling of asynchronous code.
// In conclusion, the JavaScript engine is a powerful and sophisticated component of the JavaScript runtime environment that processes and executes JavaScript code efficiently through lexical analysis, parsing, and code generation. It allows developers to write both synchronous and asynchronous code, making it an essential tool for web development and beyond. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Note: The JavaScript engine is a complex and evolving piece of software, with various implementations and optimizations. It continues to evolve to meet the demands of modern web development and provide better performance and features for developers and
    users alike.
// In summary, the JavaScript engine is a crucial component of the JavaScript runtime environment that processes and executes JavaScript code efficiently, allowing developers to create dynamic and interactive web applications. It handles both synchronous and asynchronous code, providing support for promises and async/await syntax, making it an essential tool for modern web development. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Example of JavaScript Engine in action with asynchronous code, promises, and async/await
console.log("Start");
async function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is an async function with promises");
        }, 2000);
    });
}   
async function main() {
    let message = await asyncFunction();
    console.log(message);
}   
main();
console.log("End");
// Output:
// Start
// End
// This is an async function with promises (after 2 seconds)
// In this example, the JavaScript engine will execute the synchronous code first, logging "Start" and "End" to the console.
// Then, it will handle the asynchronous code by creating an async function that returns a promise that resolves after 2 seconds.
// The main function will await the resolution of the async function, and once it is resolved, the message "This is an async function with promises" will be logged to the console.
// This demonstrates how the JavaScript engine handles both synchronous and asynchronous code efficiently, allowing for non-blocking execution of tasks and providing support for promises and async/await syntax for easier handling of asynchronous code.
// In conclusion, the JavaScript engine is a powerful and sophisticated component of the JavaScript runtime environment that processes and executes JavaScript code efficiently through lexical analysis, parsing, and code generation. It allows developers to write both synchronous and asynchronous code, making it an essential tool for web development and beyond. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.
// Note: The JavaScript engine is a complex and evolving piece of software, with various implementations and optimizations. It continues to evolve to meet the demands of modern web development and provide better performance and features for developers and users alike.
// In summary, the JavaScript engine is a crucial component of the JavaScript runtime environment that processes and executes JavaScript code efficiently, allowing developers to create dynamic and interactive web applications. It handles both synchronous and asynchronous code, providing support for promises and async/await syntax, making it an essential tool for modern web development. Understanding how the JavaScript engine works can help developers write more efficient and optimized code, as well as debug and troubleshoot issues effectively.

