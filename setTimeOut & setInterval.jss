/*setTimeout( function, duration) − This function calls function after duration milliseconds from now. This goes for one execution. Let’s see an example:

It waits for 2000 milliseconds, and then runs the callback function alert(‘Hello’):*/

setTimeout(function() { alert('Hello');}, 2000);

/*setInterval(function, duration) − This function calls function after every duration milliseconds. This goes for unlimited times. Let’s see an example:

It triggers alert(‘Hello’) after every 2000 milliseconds, not only once.*/

setInterval(function() { alert('Hello');}, 2000);
