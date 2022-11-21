const buttonStart = document.getElementById("start")
buttonStart.addEventListener("click", runGame)
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerBtn')

/**
 * this function begins when the start game button is pushed, calls questions from the array of questions, 
 * assigns the questions to the relevant button, also makes the start quiz button disappear.
 */
 let shuffledQuestions, currentQuestionIndex

function runGame() {

    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    /* document.getElementById("start").style.display = 'none' */
}


function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    document.getElementById("question").innerHTML = questions[0].question;
    document.getElementById("answerOne").innerHTML = questions[0].answers[0].text
    document.getElementById("answerTwo").innerHTML = questions[0].answers[1].text
    document.getElementById("answerThree").innerHTML = questions[0].answers[2].text
    document.getElementById("answerFour").innerHTML = questions[0].answers[3].text
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtnElement.appendChild(button)
    }


function selectAnswer (){

}




/**
 * this will create the arrays of questions to be added to the HTML 
 */
var questions = [{
        question: "Who won the 2021 Tour De France?",
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
    },
    {
        question: "In what Capital City will the 2022 Tour De France start ?",
        answers: [{
                text: 'Paris',
                correct: false
            },
            {
                text: 'Copenhagan',
                correct: true
            },
            {
                text: 'Dublin',
                correct: false
            },
            {
                text: 'London',
                correct: false
            }
        ]
    }
]