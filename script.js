/*
This is a simple game of Rock, Paper, Scissors where the player challenges the computer.
Each game consists of five rounds.
At the end of the five rounds, the scores are compared to determine the winner.

*/

// This function randomly generates the computer's choice (Rock, Paper, or Scissors).

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = Math.floor(Math.random() * choices.length);
  return choices[computerSelection];
}

/* This function prompts the user to make a choice (Rock, Paper, or Scissors) 
and converts it to title case.
*/

function getPlayerChoice() {
  let playerSelection = prompt('Rock, Paper, or Scissors? ');

  // Convert the input to title case (first letter capitalized, rest lowercase)
  playerSelection = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  return playerSelection;
}

/*
This function compares the player's and computer's choices and determines the winner of the round.
It uses the "winMessages" object to define winning choices for each player selection.
*/

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

/*
This function plays the game, tracks the player's and computer's scores for the five rounds,
and reports the final results at the end.
*/

function game() {
  let playerScore = 0;
  let computerScore = 0;
  const totalRounds = 5;

  for (let i = 0; i < totalRounds; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const result = playRound(playerSelection, computerSelection);
    alert(result);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }
  if (playerScore < computerScore) {
    alert(
      `Game Over!\nComputer Wins \nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
    );
  } else {
    alert(
      `Game Over! \nPlayer Wins \nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`
    );
  }
}

game();
