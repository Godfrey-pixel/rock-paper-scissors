/* This is a game of Rock, Paper, Scissors.
The players will challenge the computer.
There will be five rounds each.
If the player gets for points than the computer they win.
If the computer gets more points then the computer wins.
Otherwise it is a draw. */

// This is the function to get the choice from the computer.
//This will use the Random module to create a random choice for the computer

function getComputerChoice(){
    let computerSelection = Math.floor(Math.random()*3);

    if (computerSelection == 0){
        return "Rock";
    }
    else if (computerSelection == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}





//Here promt the user to make a choice.

function getPlayerChoice(){
    let playerSelection = prompt("Rock, Paper or Scissors? ");

    return playerSelection = playerSelection.toUpperCase().charAt(0)+playerSelection.toLocaleLowerCase().slice(1);
}



//This is a function that combines the choices of the player and that of the computer.

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "It is a draw.";

    }else if (playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";

    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose!, Paper beats Rock";

    }else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose!, Rock beats Scissors";

    }else if (playerSelection == "Scissors" && computerSelection=="Paper"){
        return "You Win!, Scissors beats Paper";
    
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win, Paper beats Rock";

    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose!, Scissors beats Paper";

    }
  }


//Here goes a function that recodrs the score for each player for the five rounds.


function game() {
    let i = 5;
    while (i > 0) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        alert(playRound(playerSelection, computerSelection));
        i--;
    }
}
game();
