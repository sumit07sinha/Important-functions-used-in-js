/*JSON stands for JavaScript Object Notation.
JSON is a lightweight data interchange format.jSON is a format for storing and transporting data.
JSON is often used when data is sent from a server to a web page.
When exchanging data between a browser and a server, the data can only be text.
JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.
We can also convert any JSON received from the server into JavaScript objects.
This way we can work with the data as JavaScript objects, with no complicated parsing and translations.*/
/* Sending DAta: If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server*/

<script>
var myObj = { name: "John", age: 31, city: "New York" };
var myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;
</script> /*demo_json.php: John from New York is 31*/

/*Receiving Data:If you receive data in JSON format, you can convert it into a JavaScript object.*/

<script>
var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;
</script> // name
/*javaScript has a built in function to convert a string, written in JSON format, into native JavaScript objects: JSON.parse()

So, if you receive data from a server, in JSON format, you can use it like any other JavaScript object.*/
