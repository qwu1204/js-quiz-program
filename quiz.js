// variables
var correct = 0;

// prompt
var answer1 = prompt("ask a question...");
console.log(answer1);
// if statement
if ( answer1.toUpperCase() === 'MAGIC' ) {
 correct += 1;
}
console.log("correct : "+ correct);
// output results
document.write("<p>write something to page...</p>");
