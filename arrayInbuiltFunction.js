//The JavaScript method toString() converts an array to a string of (comma separated) array values.


let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString(); //Banana,Orange,Apple,Mango

/*The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" "); //Banana Orange Apple Mango

/*Popping and Pushing
The pop() method removes the last element from an array:*/

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); //["Banana", "Orange", "Apple"]
//The pop() method returns the value that was "popped out":
let x= fruits.pop(); // "Mango"


//The push() method adds a new element to an array (at the end):

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Grapes"); //["Banana", "Orange", "Apple","Mango","Grapes"]
//The push() method returns the new array length:
let x= fruits.push("Grapes"); // x is 5


/*Shifting Elements
Shifting is equivalent to popping, working on the first element instead of the last.
The shift() method removes the first array element and "shifts" all other elements to a lower index.*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push();//["Orange", "Apple", "Mango"]

/*The shift() method returns the string that was "shifted out":*/
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.shift();    // the value of x is "Banana"


/*The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

//The unshift() method returns the new array length.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5

/*Splicing an Array
The splice() method can be used to add new items to an array:*/

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // first parameter (2) defines the position where new elements should be added.Second parameter (0) defines how many elements should be removed.
//output: Banana,Orange,Lemon,Kiwi,Apple,Mango

