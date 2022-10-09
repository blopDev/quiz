const currentPlayer = JSON.parse(localStorage.getItem('currentscore'));
const usernameEl = document.querySelector('#username');
const saveBtn = document.querySelector('#save');

const highscores = [];

const submitHandler = (event) => {
  event.preventDefault();
  currentPlayer.name = usernameEl.value;
  setHighscores();
};

const setHighscores = () => {
  highscores.push(currentPlayer);
  console.log(highscores);
  localStorage.setItem('highscores', JSON.stringify(highscores));
};

saveBtn.addEventListener('click', submitHandler);
