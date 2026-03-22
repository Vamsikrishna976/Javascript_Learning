// First Class Function
// A programming language is said to have first-class functions if it treats functions as first-class citizens.
// This means that functions can be assigned to variables, passed as arguments to other functions, and returned from functions. 
// In JavaScript, functions are first-class citizens, which means that they can be treated like any other value.

// Function Statement or Function declaration
// Declaring a function using the function keyword followed by the function name and parentheses.
function x(){
    console.log("This is a function statement/declaration");
}
x();

// Function Expression
// A function expression is a function that is assigned to a variable.
let name = function(){
    console.log("This is a function expression");
}
name();

// // Anonymus Function
// // A function that does not have a name is called an anonymous function.
// function(){
//     console.log("Bye");  
// }


//Named Function Expression
// A function expression that has a name is called a named function expression.
let name1 = function y(){
    console.log("This is a named function expression");  
}
name1();


// Arrow function
// An arrow function is a shorter syntax for writing function expressions. It is introduced in ES6.
let a = () => console.log("This is an arrow function");
a();