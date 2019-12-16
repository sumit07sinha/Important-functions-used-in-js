VAr= when we define var keyword variable it's scope is not limite to the block in which it is defined, it's limited to the function in which it is defined.
it creates variable which are function scoped not block scoped.

Example:1
function start() {
for(let i=0;i<5;i++){
  console.log(i);
  }
  console.log (i); //undefined
  }
 
 Example:2
 function start() {
for(var i=0;i<5;i++){
  console.log(i);
  }
  console.log (i);// 0 1 2 3 4 5 so outside the block space also it is defined.
  }
 
 let color= 'blue' ; // window.color will be undefined
 var age = 30; // window.age will give you 30, so var get defined in the window object. It's alwats better to avoid using var.
