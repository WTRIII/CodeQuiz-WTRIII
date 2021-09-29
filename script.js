const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const question = document.getElementById('question')
const answerButton = document.getElementById('answer-btn')

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

let currentQuestion, currentQuestionIndex
//collect user answers for storage and to tally score
//add timer to quiz
let userAnswers = [];

startButton.addEventListener('click', startQuiz)

answerButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  startButton.classList.add('hide') //hides the start button
  currentQuestion = questions.sort() //questions should display in sequence...
  currentQuestionIndex = 0
  questionContainer.classList.remove('hide') //reveals the question block
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(currentQuestion[currentQuestionIndex])//cycles through question array
}
//displays the question... theoretically
function showQuestion(question) {
  question.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButton.appendChild(button)
  })
}


