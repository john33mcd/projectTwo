const buttonTest = document.getElementById("test")
buttonTest.addEventListener("click", runGame)
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")


function runGame() {
    showQuestion()
    document.getElementById("question").innerHTML = questions[0].question;
    document.getElementById("answerOne").innerHTML = questions[0].answers[0].text;
    document.getElementById("answerTwo").innerHTML = questions[0].answers[1].text;
    document.getElementById("answerThree").innerHTML = questions[0].answers[2].text;
    document.getElementById("answerFour").innerHTML = questions[0].answers[3].text;
}

function checkAnswer() {

}

function selectAnswer() {

}

function getCorrectAnswer() {

}

function setNextQuestion() {
}

function showQuestion(){

}

/**
 * this will create the arrays of questions to be added to the HTML 
 */
var questions = [{
    question: "Who won the 2022 Tour De France?",
    answers: [{
            text: 'Jonas Vindegaard',
            correct: true
        },
        {
            text: 'Tadej Pogacar',
            correct: false
        },
        {
            text: 'Geirant Thomas',
            correct: false
        },
        {
            text: 'Wout Van Aert',
            correct: false
        }
    ]
}]