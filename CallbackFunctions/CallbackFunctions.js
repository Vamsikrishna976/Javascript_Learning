// Call back functions are functions that are passed as arguments to other functions and are executed after a certain event or condition is met. They are commonly used in asynchronous programming to handle tasks that take time to complete, such as fetching data from an API or reading a file.

// Example of a callback function
setTimeout(function() {
    console.log("This is a callback function");
},    2000);
function x(y){ 
    console.log("This is function x");
    y();
}
x(function y(){
    console.log("This is function y");

})