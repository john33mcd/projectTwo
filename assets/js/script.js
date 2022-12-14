// Web dev simplified code has been followed in order to add javascript functionality to this project. Reference to video made in readMe.

let startButton = document.getElementById("start");
let answerButtons = document.getElementById("answers");
let currentQuestionIndex;
let shuffledQuestions;
let questionElement = document.getElementById("question");
let nextQuestion = document.getElementById("nextBtn");
let counter = document.getElementById("questionCounter");

/* event listener that calls the runGame function when start button is clicked */

startButton.addEventListener("click", runGame);
nextQuestion.addEventListener("click", () => {
    currentQuestionIndex++;
    counter.innerHTML++;
    setNextQuestion();
});
/**
 * this function begins when the start game button is pushed, calls questions from the array of questions, 
 * assigns the answers to the relevant button, makes the start quiz button disappear, sets the relevant question.
 */
function runGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    answerButtons.classList.remove('hide');
    questionElement.classList.remove('hide');
    setNextQuestion();
}


function setNextQuestion() {
    reset();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * pulls from questions array and adds question text to question element.
 * loops through answers from questions and for each answer a button is created,
 * and the inner text for the button is applied to each new button. the buttons
 * are then given the classlist of btn to apply styles to same, the function
 * then applies the dataset of correct to the button if it is correct. Event listener
 * calls the button the user has selected and sets of the selected answer function.
 */

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectedAnswer);
        answerButtons.appendChild(button);
    });
}
/**
 * hides the next button, checks if there is a child to each button element, deletes answers
 */
function reset() {
    clearStatusClass(document.body);
    nextQuestion.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/**
 * assigns the selected element to picked, checks if the selected element has the dataset associated with the correct answer,
 * adds class to the body making it go green if the answer is correct, also loops through the buttons and sets the button with
 * the same class causing it to go green if it is the right answer. It then adds the next button as long as the index does not surpass
 * the amount of questions left in the shuffled questions, if the number does surpass the amount of questions left, the start button
 * has its hide class removed and text changed to start again? The question counter is reset and a notification is given to tell the user
 * that the quiz has been completed
 */

function selectedAnswer(e) {
    let picked = e.target;
    let correct = picked.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextQuestion.classList.remove('hide');
    } else {
        startButton.innerText = "Start Again ?";
        counter.innerHTML = "1";
        startButton.classList.remove("hide");
        alert("you have finished the quiz, congratulations");
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
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
];