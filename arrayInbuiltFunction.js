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

//The push() method adds a new element to an array (at the end):

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Grapes"); //["Banana", "Orange", "Apple","Mango","Grapes"]
