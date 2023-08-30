let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

function playRound(playerSelection, computerSelection) {
  const winMessages = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper',
  };

  if (playerSelection === computerSelection) {
    return "It's a draw.";
  } else if (winMessages[playerSelection] === computerSelection) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function showFinalResults() {
  const resultsScreen = document.querySelector('.results-div');
  resultsScreen.textContent = `Game Over!Player Score: ${playerScore}\nComputer Score: ${computerScore}`;

  // Show the replay button
  const replayButton = document.querySelector('.btn-replay');
  replayButton.style.display = 'block';
}

function startRound(playerSelection) {
  if (roundsPlayed < 5) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    const resultsScreen = document.querySelector('.results-div');
    resultsScreen.textContent = result;

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }

    roundsPlayed++;

    if (roundsPlayed === 5) {
      showFinalResults();
    }
  }
}

function replayGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  const resultsScreen = document.querySelector('.results-div');
  resultsScreen.textContent = '';

  // Hide the replay button
  const replayButton = document.querySelector('.btn-replay');
  replayButton.style.display = 'none';
}

const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => startRound('Rock'));

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => startRound('Paper'));

const btnScissors = document.querySelector('.btn-scissors');
btnScissors.addEventListener('click', () => startRound('Scissors'));

const replayButton = document.querySelector('.btn-replay');
replayButton.addEventListener('click', replayGame);
