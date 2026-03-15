// let a = 45
// console.log(a)

// a=53
// console.log(a)

// a=5367
// console.log(a)

// a="harry"
// console.log(a)

// var b = 45
// console.log(b)

// var b="Johny"
// var c = b +" is a web developer"
// console.log(c)


var name = prompt("Enter your name : ")
var firstchar = name.slice(0,1);
var upper = firstchar.toUpperCase();
var rest = name.slice(1,name.length);
var capital = upper + rest;
alert("Hello " + capital )