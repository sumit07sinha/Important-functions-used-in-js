/*An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
var name = 'sumit'; // it's not recommended to define variable in window scope*/
/*do some stuffs*/
(function() {
var name="Sumit";
})(); // it's always recommended to define a variable in the function scope not in the global scope (window scope). 
//IIFE is basically used to avoid creation of global variable and global function with a name that may be existing in the global library, in that case we use iife to invoke the function there in the block scope only.


/*The function becomes a function expression which is immediately executed. 
The variable within the expression can not be accessed from outside it.*/
(function () {
    var aName = "Barry";
})();
// Variable aName is not accessible from the outside scope
aName // throws "Uncaught ReferenceError: aName is not defined"
//Assigning the IIFE to a variable stores the function's return value, not the function definition itself.
var result = (function () {
    var name = "Barry"; 
    return name; 
})(); 
// Immediately creates the output: 
result; // "Barry"
