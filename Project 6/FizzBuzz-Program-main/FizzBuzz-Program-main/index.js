
//Globals 
var output = [];
var count = 1;

function fizzbuzz() {
/**** Dont change the code above ****/

//write your code here
for (var i=1; i < 101; i++){
    if (i % 3 == 0 && i % 5 ===0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
/**** Dont change the code below ****/
}

//Calling Fizzbuzz
fizzbuzz();