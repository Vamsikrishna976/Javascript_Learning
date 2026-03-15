//if-else else is statement is used to check multiple conditions. If the first condition is false then it will check the next condition and so on. If all the conditions are false then it will execute the else block.
//Syntax:
//if(condition1){
//    //code to be executed if condition1 is true
//}else if(condition2){
//    //code to be executed if condition2 is true
//}else{
//    //code to be executed if all conditions are false
//}
//Example:
var marks = prompt("Enter your marks : ");
var grade;
if(marks>90){
    grade = "You got 'A' Grade"
}
    else if(marks>80){
    grade = "You got 'B' Grade"
    }
    else if(marks>70){
    grade = "You got 'C' Grade"
    }
    else if(marks>60){
    grade = "You got 'D' Grade"
    }
    else{
    grade = "You got 'E' Grade"
    }
    document.write( grade + " with marks : " + marks);

