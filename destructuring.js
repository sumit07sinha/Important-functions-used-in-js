Destructuring simply implies breaking down a complex structure into simpler parts. 
In JavaScript, this complex structure is usually an object or an array.
With the destructuring syntax, you can extract smaller fragments from arrays and objects. 
Destructuring syntax can be used for variable declaration or variable assignment. 
You can also handle nested structures by using nested destructuring syntax.
const student = {
    firstname: 'Sumit',
    lastname: 'Sinha',
    country: 'India'
};

// Object Destructuring
const { firstname, lastname, country } = student;

console.log(firstname, lastname, country); // Sumit Sinha India
