let startButton = document.getElementById("start");
let answerButtons = document.getElementById("answers");
let currentQuestionIndex;
let shuffledQuestions;
let questionElement = document.getElementById("question");
let nextQuestion = document.getElementById("nextBtn");

/* event listener that calls the runGame function when start button is clicked */

startButton.addEventListener("click", runGame)
/**
 * this function begins when the start game button is pushed, calls questions from the array of questions, 
 * assigns the questions to the relevant button, also makes the start quiz button disappear.
 */
function runGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    answerButtons.classList.remove('hide')
    questionElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectedAnswer)
        answerButtons.appendChild(button)
    })
}

function reset() {
    nextQuestion.classList.add('hide')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectedAnswer(e) {
    let picked = e.target
    let correct = picked.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


/**
 * this will create the arrays of questions to be added to the HTML 
 */
let questions = [{
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
    }, {
        question: "What is the name given to the main group of cyclists in a race ?",
        answers: [{
                text: 'The Body',
                correct: false
            },
            {
                text: 'The Primary Pack',
                correct: false
            },
            {
                text: 'The Peleton',
                correct: true
            },
            {
                text: 'The Gaggle',
                correct: false
            }
        ]
    },
    {
        question: "What colour jersey does the leader and winner of the Tour De France wear ?",
        answers: [{
                text: 'Red',
                correct: false
            },
            {
                text: 'Yellow',
                correct: true
            },
            {
                text: 'Polkadot',
                correct: false
            },
            {
                text: 'Green',
                correct: false
            }
        ]
    },
    {
        question: "What colour jersey does the leader and winner of the points classification wear ?",
        answers: [{
                text: 'Green',
                correct: true
            },
            {
                text: 'Red',
                correct: false
            },
            {
                text: 'Yellow',
                correct: false
            },
            {
                text: 'Blue',
                correct: false
            }
        ]
    }
]