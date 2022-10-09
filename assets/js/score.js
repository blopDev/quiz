const currentPlayer = JSON.parse(localStorage.getItem('currentscore'));
const usernameEl = document.querySelector('#username');
const saveBtn = document.querySelector('#save');

let highscores = JSON.parse(localStorage.getItem('highscores')) || [];

const submitHandler = (event) => {
  event.preventDefault();
  currentPlayer.name = usernameEl.value;
  setHighscores();
};

const setHighscores = () => {
  highscores.push(currentPlayer);
  localStorage.setItem('highscores', JSON.stringify(highscores));
  // eslint-disable-next-line array-callback-return
  highscores = JSON.parse(localStorage.getItem('highscores')).sort((a, b) => {
    // eslint-disable-next-line no-unused-expressions
    b.playerScore - a.playerScore;
  });
  console.log(highscores);
};

saveBtn.addEventListener('click', submitHandler);
