let meats=[chicken,pork];
let fruits=[kiwi, oranges, apple];
console.log(fruits);// kiwi, oranges, apple
/*By using the spread operator we made sure that the original array is not affected whenever we alter the new array.
The concat() method provided by javascript helps in concatenation of two or more strings(String concat() ) or is used to merge 
two or more arrays. In case of arrays,this method does not change the existing arrays but instead returns a new array. 
In case of spread you can change the existing array in to new array and put the things at a required place. */


let meats=[chicken,pork];

let fruits=[kiwi,...meats, oranges, apple];

console.log(fruits);// kiwi,chicken, pork, oranges, apple
