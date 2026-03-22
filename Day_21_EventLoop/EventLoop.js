// Event loop is a programming construct that allows for asynchronous programming 
// by managing and executing tasks in a non-blocking manner. 
// It is commonly used in JavaScript and other languages to handle 
// events, callbacks, and asynchronous operations without blocking the main thread of execution. 
// The event loop continuously checks for tasks in the event queue and executes 
// them when the call stack is empty, allowing for efficient handling of events and asynchronous operations.

// The event loop works in conjunction with the call stack and the event queue.
// The call stack is a data structure that keeps track of the function calls in a program. 
// When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack.

// The event queue is a data structure that holds the tasks that are waiting to be executed.
// When an asynchronous operation is completed, its callback function is added to the event queue.
// The event loop continuously checks the call stack and the event queue. 
// If the call stack is empty, it takes the first task from the event queue and pushes it onto the call stack for execution. 
// This process allows for non-blocking execution of tasks, as the event loop can handle multiple tasks without waiting for each one to complete before moving on to the next.      

// Example of Event Loop in JavaScript
console.log("Start");
setTimeout(() => {
    console.log("This is a callback function");
}, 2000);
console.log("End");

// Output:
// Start
// End
// This is a callback function (after 2 seconds)