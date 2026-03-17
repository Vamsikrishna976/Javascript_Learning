// Hsoisting is a JavaScript mechanism where variables and function declarations are 
// moved to the top of their containing scope during the compilation phase. 
// This means that you can use variables and functions before they are declared in the code.


a()

console.log(b);
var b = 10;

function a (){
    var c = 10;
    
    console.log(c);
}