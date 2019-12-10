/*basic promise function*/
let promise = new Promise(function(resolve, reject) {
if(promise_kept)
  resolve("done");
else
  reject(new Error("…"));
  
});
