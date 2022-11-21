


/**
 * this function begins when the start game button is pushed, calls questions from the array of questions, 
 * assigns the questions to the relevant button, also makes the start quiz button disappear.
 */

let addQuestion = document.getElementById('start')
addQuestion.addEventListener('click', runGame)
function runGame() {
console.log('started')
}

function setNextQuestion() {
}

function showQuestion() {

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

