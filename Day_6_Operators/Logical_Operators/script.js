// AND Operator
//The AND operator is used to combine two conditions. The result is true only if both conditions are true.
// Example
let x = 5;
let y = 10;
console.log(x >3 && y>8); // true
console.log(x >3 && y>11); // false

// OR Operator
//The OR operator is used to combine two conditions. The result is true if either of the conditions is true.
// Example
var a = 5;
var b = 6;
console.log(a>2 || b>5)//true
console.log(a>6 || b>4)//true

//NOT Operator
//The NOT operator is used to reverse the logical state of its operand. If a condition is true, the NOT operator makes it false.
// Example
let c = 5;
console.log(!(c<6))//false
console.log(!(c>7))//true

let d = true;
let e = false;
console.log(!d)//false
console.log(!e)//true