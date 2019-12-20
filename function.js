// method 1
function foo() {
var a= 10;
var b= 20;
return (a+b);
}
foo();

// method 2
var add= function(){
  var a= 10;
var b= 20;
  console.log(a+b);
};
add();

// merhod 3
 var myObj={};
myObj.add = function{
  var a= 10;
var b= 20;
  console.log(a+b);
};
myObj.add();


