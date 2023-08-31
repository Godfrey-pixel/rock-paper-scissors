// Initialize player's and computer's scores and rounds played
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to randomly generate computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

// Function to determine the outcome of a round
function playRound(playerSelection, computerSelection) {
  // Mapping of winning choices
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

// Function to display final results
function showFinalResults() {
  // Display game over message with scores
  const resultsScreen = document.querySelector('.results-div');
  if (playerScore > computerScore) {
    resultsScreen.textContent = `Game Over You win!`;
  } else {
    resultsScreen.textContent = `Game Over You Lose!`;
  }

  // Show the replay button
  const replayButton = document.querySelector('.btn-replay');
  replayButton.style.display = 'block';
}

// Function to start a new round
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

    // Update the scoreboard display
    const playerScoreElem = document.querySelector('.player-score');
    const computerScoreElem = document.querySelector('.computer-score');
    playerScoreElem.textContent = `Player: ${playerScore}`;
    computerScoreElem.textContent = `Computer: ${computerScore}`;

    roundsPlayed++;

    if (roundsPlayed === 5) {
      showFinalResults();
    }
  }
}

// Function to reset the game
function replayGame() {
  // Reset scores and rounds played
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  // Clear results display
  const resultsScreen = document.querySelector('.results-div');
  resultsScreen.textContent = '';

  // Reset the scoreboard display
  const playerScoreElem = document.querySelector('.player-score');
  const computerScoreElem = document.querySelector('.computer-score');
  playerScoreElem.textContent = 'Player: 0';
  computerScoreElem.textContent = 'Computer: 0';

  // Hide the replay button
  const replayButton = document.querySelector('.btn-replay');
  replayButton.style.display = 'none';
}

// Add event listeners to buttons for player's choices
const btnRock = document.querySelector('.btn-rock');
btnRock.addEventListener('click', () => startRound('Rock'));

const btnPaper = document.querySelector('.btn-paper');
btnPaper.addEventListener('click', () => startRound('Paper'));

const btnScissors = document.querySelector('.btn-scissors');
btnScissors.addEventListener('click', () => startRound('Scissors'));

// Add event listener to replay button
const replayButton = document.querySelector('.btn-replay');
replayButton.addEventListener('click', () => {
  replayGame();
});
