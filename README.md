# Important-functions-used-in-js
- Promise
- this keyword
- spread operator
- arrow function
-JAva script is a synchronous programming language but because of call back functions we can make it as asynchronous programming language.
Promiseis like real life promises which we make in day to day life.The promise object shows the completion of an asynchronous operations and it's resulting values.
promises have two parts:
- Creation of promises
- handling of promises
Basic blue print of promises
new Promise( /* executor */ function(resolve, reject) { ... } );
The executing function(executor) accepts two parameters resolve and reject which in turn are callback functions. Promises are used for handling asynchronous operations also called blocking code, examples of which are DB, I/O or API calls, which are carried out by the executor function. Once that completes it either calls resolve on success or reject function on error.
how to use async and await
