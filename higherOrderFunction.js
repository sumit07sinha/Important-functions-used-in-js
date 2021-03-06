/*A higher order function is a function that takes a function as an argument, or returns a function 
following higher order functions
array.map*/
    let arr=[2,4,6];
    let multiplier=(x)=>{
        return x*2;
        } // output will be [4,8,12]
     console.log(arr.map(multiplier));
//array.fill used to fill empty array.
    let arr= new Array(100);
    let val= arr.fill(1).map(Math.random);
    console.log(val); 
/*array. reduce 
using  it for finding max element in an array*/\
    let vals=[2,4,8,5,7];
    let maxVal= vals.reduce((a,b)=>a>b?a:b);
    console.log(maxVal);//8
//array.filter The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    let vals=[2,4,8,5,7];
    let maxVal= vals.filter(x=>x>2);
    console.log(maxVal);
//for a string
    let sentence= "I am a student";
    let words= sentence.split(/\W+\).filter(word=>word.length>3);
    console.log(words); // student
