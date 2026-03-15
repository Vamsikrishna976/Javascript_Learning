                // Switch statement
                
// Switch statement is used to check multiple conditions. It is used to select one of many code blocks to be executed.
// Syntax:
// switch(expression){
//     case value1:
//         //code to be executed if expression is equal to value1
//         break;
//     case value2:
//         //code to be executed if expression is equal to value2
//         break;
//     case value3:
//         //code to be executed if expression is equal to value3
//         break;
//     default:
//         //code to be executed if expression is different from all values
// }
// Example:

var runs = prompt("Ready to play hit the ball : ");
switch(runs){
    case ("6"):
        alert("Batsmen hits the ball its gone for six . What an amazing shot ");
        break;
    case ("4"):
        alert("Batsmen hits the ball its gone gor Four. That's Beautiful cover drive ");
        break;
    case ("0"):
        alert("Batsmen misses the ball. It hits the stumps. Wow!! what a ball dellivered by bowler ");
        break;
        default:
        alert("Its wide ball !!")

}