//if else Statment
// If the condition is false, then the else statement will be executed
//Syntax
//if (condition) {
// block of code
//} else {
// block of code
//}

if(a>b){
    console.log("Hey hi iam vamsi Krishna i am in if block");
}
else{
    console.log("Hey hi i am vamsi Krishna i am in else block");
}
// Output: Hey hi i am vamsi Krishna i am in else block

if(a<b){
    console.log("Hey hi i am vamsi Krishna i am in if block");
}
else{
    console.log("Hey hi i am vamsi Krishna i am in else block");
}
// Output: Hey hi iam vamsi Krishna i am in if block

let age = prompt("Enter your age");
if(age > 18){
   alert("You are eligible for voting because your age is " + age);
   console.log("You are eligible for voting because your age is " + age);
}
else{
   alert("you are not elgible for voting  because your age is " + age);
   console.log("you are not elgible for voting because your age is " + age);
}
// Output: You are eligible for voting
// If the age is greater than 18 then the if block will be executed otherwise else block will be executed
// If the age is 18 then also the if block will be executed
// If the age is less than 18 then else block will be executed
// If the age is 18.5 then also the if block will be executed
// If the age is 18.4 then else block will be executed