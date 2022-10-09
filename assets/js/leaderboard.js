const highscoreList = JSON.parse(localStorage.getItem('highscoreList'));

const tableEl = document.querySelector('tbody');

const bodyHtml = () => {
  tableEl.innerHTML = highscoreList.map((scores) => {
    return `
          <tr>
          <td>${scores.name}</td>
          <td>${scores.playerScore}</td>
        </tr>`;
  }).join('');
};

onload = bodyHtml();
