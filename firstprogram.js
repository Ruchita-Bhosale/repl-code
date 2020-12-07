var readlineSync = require('readline-sync');
score = 0;
var userName = readlineSync.question("what's your name?");

console.log("welcome " + userName + " to Do you know Ruchita?");

function play(question, answer) {
    userAnswer = readlineSync.question(question);

    if (userAnswer === answer) {
        console.log(" you are right!");
        score = score + 1;
        console.log("current score:", score);
        console.log("--------------------");

    } else {
        console.log("you are wrong");
        score = score - 1;
        console.log("current score:", score);
        console.log("--------------------");

    }
}

var questions = [{
    question: "where do i live?",
    answer: "mumbai"
}, {
    question: "My favourite ice-cream?",
    answer: "tender coconut"
}];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)

}
console.log("your total score:" + score);