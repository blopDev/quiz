// eslint-disable-next-line no-extend-native
Array.prototype.shuffle = function () {
  // Creates a method that can be accessed via protoype/_proto_ property from any array
  let i = this.length;
  let randomValue;
  let temp;

  while (--i > 0) {
    // Start decending order till it hits the first index
    randomValue = Math.floor(Math.random() * (i + 1)); // This will be the index that is going to be swapped with the current index
    temp = this[randomValue]; // The start of the swapping of the index.
    this[randomValue] = this[i];
    this[i] = temp;
  }
  return this;
};

const questions = [
  {
    questionObj: {
      question: 'What artists recorded two of their bestselling albums while they were behind bars?',
      choices: {
        choice1: 'Tupac',
        choice2: 'Ozzy Osbourne',
        choice3: 'Johnny Cash',
        choice4: '50 Cent'
      },
      answer: 'Johnny Cash'
    }
  },
  {
    questionObj: {
      question: 'Michael Jackson debuted his trademark moonwalk during which song in 1983?',
      choices: {
        choice1: 'Smooth Criminal',
        choice2: 'Billie Jean',
        choice3: 'Beat It',
        choice4: 'Thriller'
      },
      answer: 'Billie Jean'
    }
  },
  {
    questionObj: {
      question: 'It took Mariah Carey 15 minutes to write which song in 1994?',
      choices: {
        choice1: 'Without You',
        choice2: 'Fantasy',
        choice3: 'Emotions',
        choice4: 'All I want For Christmas Is You'
      },
      answer: 'All I Want For Christmas Is You'
    }
  },
  {
    questionObj: {
      question: 'The most awarded female act of all time goes to… which 80s sensation?',
      choices: {
        choice1: 'Cyndi lauper',
        choice2: 'Madonna',
        choice3: 'Tina Turner',
        choice4: 'Whitney Houston'
      },
      answer: 'Whitney Houston'
    }
  },
  {
    questionObj: {
      question: 'The most awarded female act of all time goes to… which 80s sensation?',
      choices: {
        choice1: 'Cyndi lauper',
        choice2: 'Madonna',
        choice3: 'Tina Turner',
        choice4: 'Whitney Houston'
      },
      answer: 'Whitney Houston'
    }
  },
  {
    questionObj: {
      question: "What was Madonna's first Top 10 hit?",
      choices: {
        choice1: 'Like a Prayer',
        choice2: 'Ray of Light',
        choice3: 'Tina Turner',
        choice4: 'Hung Up'
      },
      answer: 'Hung Up'
    }
  },
  {
    questionObj: {
      question: 'Which DJ is known for throwing a caka at an audience memeber at every show?',
      choices: {
        choice1: 'Calvin Harris',
        choice2: 'David Guetta',
        choice3: 'Steve Aoki',
        choice4: 'Skrillex'
      },
      answer: 'Steve Aoki'
    }
  },
  {
    questionObj: {
      question: 'EDM grew in part as a revolt against which music trend?',
      choices: {
        choice1: 'Pop',
        choice2: 'Punk',
        choice3: 'Disco',
        choice4: 'Jazz'
      },
      answer: 'Disco'
    }
  },
  {
    questionObj: {
      question: "Which 2000s artist sings: 'What A Girl Wants'?",
      choices: {
        choice1: 'Christina Aguilera',
        choice2: 'Carrie Underwood',
        choice3: 'Kelly Clarkson',
        choice4: 'Avril Lavigne'
      },
      answer: 'Kelly Clarkson'
    }
  },
  {
    questionObj: {
      question: "What U.S. city is considered the 'Country Music Captail of the World'?",
      choices: {
        choice1: 'Nashville',
        choice2: 'Dallas',
        choice3: 'Lousville',
        choice4: 'Denver'
      },
      answer: 'Nashville'
    }
  },
  {
    questionObj: {
      question: 'What was the name of the band Justin Timberlake started in?',
      choices: {
        choice1: 'NSYNC',
        choice2: 'Backstreet Boys',
        choice3: '5ive',
        choice4: '2gether'
      },
      answer: 'NSYNC'
    }
  }
];

let currentQuestion;

const selectQuestion = () => {
  questions.shuffle();
  currentQuestion = [];
  currentQuestion.push(questions[questions.length - 1]);
  questions.pop();

  if (currentQuestion[0] === undefined) {
    endQuiz();
  } else {
    return currentQuestion;
  }
};

const firstChoice = document.querySelector('li[data-choice="1"]');
const secondChoice = document.querySelector('li[data-choice="2"]');
const thirdChoice = document.querySelector('li[data-choice="3"]');
const fourthChoice = document.querySelector('li[data-choice="4"]');
const questionEl = document.querySelector('h1[data-question]');

const loadQuestions = () => {
  selectQuestion(currentQuestion);
  questionEl.textContent = currentQuestion[0].questionObj.question;
  firstChoice.textContent = currentQuestion[0].questionObj.choices.choice1;
  secondChoice.textContent = currentQuestion[0].questionObj.choices.choice2;
  thirdChoice.textContent = currentQuestion[0].questionObj.choices.choice3;
  fourthChoice.textContent = currentQuestion[0].questionObj.choices.choice4;
};
let score = 0;

const scoreEl = document.querySelector('#score');
const checkQuestion = (event) => {
  if (event.target.textContent === currentQuestion[0].questionObj.answer) {
    score += 50;
    scoreEl.textContent = score;
  } else {
    score -= 25;
    scoreEl.textContent = score;
  }
};

const ulEl = document.querySelector('ul');

const questionHandler = (event) => {
  checkQuestion(event);
  loadQuestions();
};

const timerEl = document.querySelector('#quiz-timer');
let timerVal = 61;

const countDown = () => {
  timerVal--;
  timerEl.textContent = timerVal;
  if (timerVal === 0) {
    clearInterval(timerInt);
  }
};

const timerInt = setInterval(countDown, 1000);

class Player {
  constructor (name, playerScore) {
    this.name = name;
    this.playerScore = playerScore;
  }

  showName () {
    console.log(this.name);
  }

  showScore () {
    console.log(this.playerScore);
  }
}

const endQuiz = () => {
  const currentPlayer = new Player('', score);
  localStorage.setItem('currentscore', JSON.stringify(currentPlayer));
  location.assign('./recordscore.html');
};

const startQuiz = () => {
  score = 0;
  countDown();
  loadQuestions();
};

startQuiz();

ulEl.addEventListener('click', questionHandler);

// Get the score
// Then get the name of the user
// Then turn it into an object and save it in local storage
// Then map it out


