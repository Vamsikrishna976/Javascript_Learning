// Scope refers to the accessibility of variables and functions in different parts of the code.
// Scope chain is the hierarchy of scopes that determines how variables and functions are accessed in nested functions.
// Lexical environment is the environment in which a function is defined, 
// which includes the variables and functions that are in scope at the time of the function's creation.

function a() {
    var b = 10;
    d();
    function d() {
        function c() {
            console.log(b);
        } c();
    }
}

a();