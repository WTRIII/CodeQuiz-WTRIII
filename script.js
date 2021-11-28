const startButton = document.querySelector('#start-btn')
const questionContainer = document.querySelector('#question-container')
const questionEl = document.querySelector('#question')
const answerBtn = document.querySelector('#answer-btn')

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
  ]

let currentQuestion, currentQuestionIndex;
//collect user answers for storage and to tally score
//add timer to quiz
let userAnswers = [];

startButton.addEventListener('click', startQuiz)

answerBtn.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide') //hides the start button
  currentQuestion = questions.sort() //questions should display in sequence...
  currentQuestionIndex = 0
  questionContainer.classList.remove('hide') //reveals the question block
  nextQuestion()
}

function nextQuestion() {
  showQuestion(currentQuestion[currentQuestionIndex])//cycles through question array
}
//displays the question... theoretically
function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    // button.addEventListener('click', selectAnswer)
    answerBtn.appendChild(button)
  })
}

// function resetHtml {

// }

// function userAnswer (input){

// }

// const startButton = document.getElementById('start-btn')
// const questionContainer = document.getElementById('question-container')
// const question = document.getElementById('question')
// const answerBtn = document.getElementById('answer-btn')
// function startButton{}
// function timer{}
// function toggleHidden{}
// function questionCycle{}

// var timeEl = document.querySelector(".time");
// var secondsLeft = 10;
// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }
//   }, 1000);
// }

// while (count > 0){
//   clearInterval(timerInterval)
// }

// function startQuiz
// function nextQuestion
// function selectAnswer