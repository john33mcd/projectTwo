const buttonTest = document.getElementById("test")
buttonTest.addEventListener("click", runGame)
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")


function runGame() {
    showQuestion()
    document.getElementById("question").innerHTML = questions[0].question;
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