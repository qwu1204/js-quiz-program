// variables
var correct = 0;

// prompt
var answer1 = prompt("What is the name of the latest iPhone");
if ( answer1.toUpperCase() === 'SE' ) {
 correct += 1;
}


var answer2 = prompt("What is this script written in");
if ( answer2.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1;
}

var answer3 = prompt("Is Javascript and Java related at all? Answer yes or no");
if ( answer3.toUpperCase() === 'NO' ) {
 correct += 1;
}

var answer4 = prompt("Is jQuery easier to write than traditional Javascript? Answer yes or no");
if ( answer4.toUpperCase() === 'YES' ) {
 correct += 1;
}

var answer5 = prompt("How to reference an element by id in JQuery?(Put the symbol");
if ( answer5.toUpperCase() === '#' ) {
 correct += 1;
}

//console.log("correct : "+ correct);
// output results
document.write("<p>You got " + correct + " out of 5 right.</p>");
