/*A higher order function is a function that takes a function as an argument, or returns a function .*/
//following higher order functions
/*array.map*/
let arr=[2,4,6];
let multiplier=(x)=>{
return x*2;
}
console.log(arr.map(multiplier));
