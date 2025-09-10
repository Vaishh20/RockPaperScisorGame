let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let resultText = `You chose ${playerChoice}, computer chose ${computerChoice}. `;

  if (playerChoice === computerChoice) {
    resultText += "It's a tie!";
    document.getElementById('tieS').play();
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultText += "You winnnn!";
    document.getElementById('winS').play();
  } else {
    computerScore++;
    resultText += "You lose! 😞🥹";
    document.getElementById('loseS').play();
  }

  document.getElementById('result').innerText = resultText;
  document.getElementById('scoreboard').innerHTML =
    `<span class="badge bg-success">Player: ${playerScore}</span>
     <span class="badge bg-danger">Computer: ${computerScore}</span>`;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('result').innerText = "";
  document.getElementById('scoreboard').innerHTML =
    `<span class="badge bg-success">Player: 0</span>
     <span class="badge bg-danger">Computer: 0</span>`;
}
