var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " Let's play quiz ");
console.log("_____________________________");

function play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer) {
        console.log("right!");
        score = score + 1;

    } else {
        console.log("wrong!");
    }
    console.log("current score: ", score);
    console.log("______________");
}

var questions = [{
    question: "longest river in the world? ",
    answer: "Nile",
}, {
    question: "Smallest Continent? ",
    answer: "Australia",
}, {
    question: "Give the full form of UNESCO?",
    answer: " United Nations Educational Scientific and Cultural Organization.",
}];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! Your total score is: ", score);