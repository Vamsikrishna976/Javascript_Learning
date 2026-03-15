// Scope
var a =12;
let b = 13;
const c = 14;
{
    console.log(a);
    console.log(b);
    console.log(c); 
}

function test(){
       var d = 10;
        let e = 20;
        const f = 30;
        console.log("Function scope: ", d,e,f);  
        console.log(e);
         
}test();

// Global scope:

console.log("Global scope: ", a,b,c);



