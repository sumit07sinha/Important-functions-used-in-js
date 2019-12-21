/*In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object.
The value of this will become the new object when a new object is created.

Note that this is not a variable. It is a keyword. You cannot change the value of this.*/
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Object Constructors</h2>

<p id="demo"></p>

<script>
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  
}

// Create a Person object
var myFather = new Person("Sumit", "Sinha", 25, "Blue");

// Display age
document.getElementById("demo").innerHTML =
" My father name is " + myFather.firstName + myFather.lastName + " and is of " + myFather.age + "years old."; 
</script>

</body>
</html>
