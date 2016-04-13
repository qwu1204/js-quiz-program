// variables
var correct = 0;

// prompt
var answer1 = prompt("What is the name of the latest iPhone");

//console.log(answer1);
// if statement
if ( answer1.toUpperCase() === 'SE' ) {
 correct += 1;
}

var answer2 = prompt("What is the name of the latest iPhone");

//console.log(answer1);
// if statement
if ( answer2.toUpperCase() === 'SE' ) {
 correct += 1;
}

var answer3 = prompt("What is this script written in");

//console.log(answer1);
// if statement
if ( answer3.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1;
}

var answer3 = prompt("Is Javascript and Java related at all? Answer yes or no");

//console.log(answer1);
// if statement
if ( answer3.toUpperCase() === 'no' ) {
 correct += 1;
}



//console.log("correct : "+ correct);
// output results
document.write("<p>You got " + correct + " out of 5 right.</p>");
