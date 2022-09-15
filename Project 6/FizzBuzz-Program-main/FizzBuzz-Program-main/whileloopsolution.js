
//Globals 
var output = [];
var count = 1;

function fizzbuzz() {
/**** Dont change the code above ****/

//write your code here

while (count <= 100) {
if (count % 3 === 0 && count % 5 ===0){
output.push("Fizzbuzz");
}else if ( count % 3 ===0){
 	output.push("fizz");
}else if (count % 5 ===0) {
 	output.push("buzz");
}else {
 output.push(count);
}
count++;
}
console.log(output);
/**** Dont change the code below ****/
}

//Calling Fizzbuzz
fizzbuzz();