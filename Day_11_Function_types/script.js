                      //Function types :
                    
                      //Anonymous Function :
// example : 1
var add;
add = function add(a, b) {
    var c = a + b;
    return c;
}(1, 7)
console.log(add);

                      //IIFE Function :
// example : 1
(function add(a, b) {
    var c = a + b;
    console.log(c);
})(2, 7)

//example : 2
var add;
add = (function add(a, b) {
    var c = a + b;
    return c;
})(1, 9)
console.log(add);

                      //Arrow Function :
// Method : 1
var product;
product = (a,b) => {
    var c = a*b;
   return c;
}
console.log( product(2,7));

//Method  : 2
var product;
product = (a,b) => {
    var c = a*b;
    console.log(c)
}
( product(2,6));

                      //Arrow Function types :
// Type : 1
// is statement is one line then we can remove the curly braces and return keyword
var product = (a,b) => a*b;
console.log(product(4,6));
                   
// Type : 2
// if we have only one parameter then we can remove the paranthesis
//Method : 1
var cube = a => a*a*a;
console.log(cube(3));
//Method :2 
var cube = (a) => a*a*a;
console.log(cube(2));
//Method :3
var cube = (a ) => {return a*a*a};
console.log(cube(4));
