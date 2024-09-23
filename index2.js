const quizData = [
    {
        question: "1) What is the capital city of India?",
        options: ["Delhi", "Mascow", "Karachi", "Seoul"],
        answer: "Delhi"
    },
    {
        question: "2) How many minutes are there in a week?",
        options: ["10080", "9860", "60", "10000"],
        answer: "10080"
    },
    {
        question: "3) Who is the hero in the movie arya 2?",
        options: ["Arjun", "Ntr", "Ram", "Allu arjun"],
        answer: "Allu arjun"
    },
    {
        question: "4) Which country has the highest life expectancy?",
        options: ["India", "Seoul", "Hongkong", "China"],
        answer: "Hongkong"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quiz = document.getElementById("quiz-container");
let currentQuestion = 0;
let score = 0;
let userAnswer = null;

function showQuestion() {
    const questionlist = quizData[currentQuestion];
    questionElement.innerText = questionlist.question;
    optionsElement.innerHTML = "";
    questionlist.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", () => {
            selectAnswer(option);
        });
    });
}

function selectAnswer(answer) {
    userAnswer = answer;
    const question = quizData[currentQuestion];
    if (userAnswer === question.answer) {
        score++;
    }
    const buttons = optionsElement.children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("selected");
        if (buttons[i].innerText === answer) {
            buttons[i].classList.add("selected");
        }
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed...!!</h1>
        <p>Your score is : ${score}</p>
    `;
}

showQuestion();

document.getElementById("next-btn").addEventListener("click", nextQuestion);
document.getElementById("previous-btn").addEventListener("click", previousQuestion);
