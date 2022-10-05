const questions = [
  {
    questionObj: {
      question: 'Where are you?',
      choices: {
        choice1: 'Home',
        choice2: 'Park',
        choice3: 'Walmart',
        choice4: 'Idk'
      },
      answer: 'Idk'
    }
  },
  {
    questionObj: {
      question: 'What are you',
      choices: {
        choice1: 'Human',
        choice2: 'Dog',
        choice3: 'Cat',
        choice4: 'Horse'
      },
      answer: 'Cat'
    }
  },
  {
    questionObj: {
      question: 'How are you',
      choices: {
        choice1: 'Happy',
        choice2: 'Sad',
        choice3: 'Awesome',
        choice4: 'Epic'
      },
      answer: 'Epic'
    }
  }
]

let score;

// eslint-disable-next-line no-extend-native
Array.prototype.shuffle = function () {
  // Creates a method that can be accessed via protoype/_proto_ property from any array
  let i = this.length
  let randomValue
  let temp

  while (--i > 0) {
    // Start decending order till it hits the first index
    randomValue = Math.floor(Math.random() * (i + 1)) // This will be the index that is going to be swapped with the current index
    temp = this[randomValue] // The start of the swapping of the index.
    this[randomValue] = this[i]
    this[i] = temp
  }
  return this
}

let currentQuestion

const selectQuestion = () => {
  questions.shuffle()
  currentQuestion = []
  currentQuestion.push(questions[questions.length - 1])
  questions.pop()
}

const firstChoice = document.querySelector('li[data-choice="1"]')
const secondChoice = document.querySelector('li[data-choice="2"]')
const thirdChoice = document.querySelector('li[data-choice="3"]')
const fourthChoice = document.querySelector('li[data-choice="4"]')
const questionEl = document.querySelector('h1[data-question]')

questionEl.value = 'not answered'

const loadQuestions = () => {
  selectQuestion(currentQuestion)
  questionEl.textContent = currentQuestion[0].questionObj.question
  firstChoice.textContent = currentQuestion[0].questionObj.choices.choice1
  secondChoice.textContent = currentQuestion[0].questionObj.choices.choice2
  thirdChoice.textContent = currentQuestion[0].questionObj.choices.choice3
  fourthChoice.textContent = currentQuestion[0].questionObj.choices.choice4
}

const checkQuestion = (event) => {
  if (event.target.textContent === currentQuestion[0].questionObj.answer) {
    console.log(true)
  } else {
    console.log(false)
  }
}

const ulEl = document.querySelector('ul')



const questionHandler = (event) => {
  checkQuestion(event)
  loadQuestions()
  
}

const timerEl = document.querySelector('#quiz-timer')
let timerVal = 61

const countDown = () => {
  timerVal--
  timerEl.textContent = timerVal
  if (timerVal === 0) {
    clearInterval(timerInt)
  }
}

const timerInt = setInterval(countDown, 1000)



const startQuiz = () => {
  countDown()
  loadQuestions()
}

startQuiz()

ulEl.addEventListener('click', questionHandler)
