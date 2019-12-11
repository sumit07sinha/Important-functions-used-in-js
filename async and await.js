/*Async and Await are extensions of promises. If you are not clear with the concepts of Promise
Async
Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. Using async simply implies that a promise will be returned, and if a promise is not returned, JavaScript automatically wraps it in a resolved promise with its value. */
async function firstAsync() {
  return 27;
}

firstAsync().then(alert); // 27
/*it will give output as 27, which means that promise was returned, otherwise .then() method simply won't be possible*/

/*Await
The await operator is used to wait for a Promise. It can be used inside an Async block only.
The keyword Await makes JavaScript wait until the promise returns a result. 
It has to be noted that it only makes the async function block wait and not the whole program execution.*/
async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    alert(result); 
    }
};
firstAsync();
/* Async and await executes the function sequentially, this consumes more time,  having parallel execution is much much faster.*/
/*this creates the need of promise.all()*/
