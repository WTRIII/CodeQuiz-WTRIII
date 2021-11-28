const startButton = document.querySelector('#start-btn');
const questionContainer = document.querySelector('#question-container');
const questionEl = document.querySelector('#question');
const answerBtn = document.querySelector('#answer-btn');
const bodyEl = document.querySelector('body');

const questions = [
  {
    question: 'What is the doctrinal maximum effective point range of a M4 carbine?',
    answers: [
      { text: '300m', correct: true },
      { text: '50m', correct: false },
      { text: '150m', correct: false },
      { text: '500m', correct: false }
    ]
  },
  {
    question: 'What is the main battle tank of the U.S. Army?',
    answers: [
      { text: 'M1 Abrams', correct: false },
      { text: 'Leopard 2A6', correct: false },
      { text: 'T-80U', correct: false },
      { text: 'M1A2SEPV2', correct: true }
    ]
  },
  {
    question: 'How many ships does the U.S. Navy operate?',
    answers: [
      { text: '50 to 100', correct: false },
      { text: '101-200', correct: false },
      { text: '201-300', correct: false },
      { text: '300 or more', correct: true }
    ]
  },
  {
    question: 'What is the maximum effective range of an excuse?',
    answers: [
      { text: 'Infinite', correct: false },
      { text: '0M', correct: true },
      { text: 'Depends on how good your lungs are', correct: false },
      { text: 'Depends on if you can cry on command', correct: false }
    ]
  },
  {
    question: 'Which country started World War I?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'Austro-Hungary', correct: true },
      { text: 'France', correct: false },
      { text: 'Serbia', correct: false }
    ]
  }
];

let currentQuestion;
let currentQuestionIndex = 0;
//collect user answers for storage and to tally score
let userAnswers = [];

startButton.addEventListener('click', startQuiz)

answerBtn.addEventListener('click', () => {
  // place the right/wrong if statement here
  if (questions[currentQuestionIndex].answers.correct === false) {
    bodyEl.classList.add('wrong');
    setTimeout(function () {
      bodyEl.classList.remove('wrong');
    }, 1000);
  }
  else {
    bodyEl.classList.add('correct');
    setTimeout(function () {
      bodyEl.classList.remove('correct');
    }, 1000);
  };

  currentQuestionIndex++
  nextQuestion()
});

function startQuiz() {
  startButton.classList.add('hide'); //hides the start button
  currentQuestion = questions.sort(); //questions should display in sequence...
  questionContainer.classList.remove('hide'); //reveals the question block
  nextQuestion();
};

function nextQuestion() {
  if (currentQuestionIndex === questions.length) {
    endQuiz();
  }
  else {
    answerBtn.innerHTML = "";
    showQuestion(currentQuestion[currentQuestionIndex])//cycles through question array
  };
};
//displays the questions and answer buttons
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')

    answerBtn.appendChild(button)
  })
};

function endQuiz() {
  currentQuestionIndex = 0;
  startButton.classList.remove('hide'); //reveals the start button
  questionContainer.classList.add('hide'); //hides the question block
};

// set up timer
// set up right/wrong feedback
// set up timer detraction as punishment for wrong
