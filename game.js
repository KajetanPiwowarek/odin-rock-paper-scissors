let computerSelection = "";
let computerPoints = 0;
let playerSelection = "";
let playerPoints = 0;

function getComputerChoice() {
  let random = Math.round(Math.random() * (3 - 1) + 1);
  switch (random) {
    case 1:
      computerSelection = "rock";
      break;
    case 2:
      computerSelection = "paper";
      break;
    case 3:
      computerSelection = "scissors";
      break;
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  console.log("Player choice: " + playerSelection);
  console.log("Computer choice: " + computerSelection);
  if (playerSelection == "rock" && computerSelection == "rock") {
    console.log("It's a Tie! Rock against Rock");
  } else if (
    playerSelection == "rock" &&
    computerSelection == "paper"
  ) {
    console.log("You Lose! Paper beats Rock");
    computerPoints++;
  } else if (
    playerSelection == "rock" &&
    computerSelection == "scissors"
  ) {
    console.log("You Win! Rock beats Scissors");
    playerPoints++;
  } else if (
    playerSelection == "paper" &&
    computerSelection == "rock"
  ) {
    console.log("You Win! Paper beats Rock");
    playerPoints++;
  } else if (
    playerSelection == "paper" &&
    computerSelection == "paper"
  ) {
    console.log("It's a Tie! Paper against Paper");
  } else if (
    playerSelection == "paper" &&
    computerSelection == "scissors"
  ) {
    console.log("You Lose! Scissors beats Paper");
    computerPoints++;
  } else if (
    playerSelection == "scissors" &&
    computerSelection == "rock"
  ) {
    console.log("You Lose! Rock beats Scissors");
    computerPoints++;
  } else if (
    playerSelection == "scissors" &&
    computerSelection == "paper"
  ) {
    console.log("You Win! Scissors beats Paper");
    playerPoints++;
  } else if (
    playerSelection == "scissors" &&
    computerSelection == "scissors"
  ) {
    console.log("It's a Tie! Scissors against Scissors");
  }
}

function game() {
while (true) {
    while (playerSelection == "") {
      playerSelection = prompt(
        "Please enter your choice (rock, paper or scissors):"
      );
    }

    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    playerSelection = "";
    computerSelection = "";

    console.log(`Score[Player:${playerPoints} - Computer:${computerPoints}]`);

    if (playerPoints == 3) {
      console.log("You're the Winner! Congratulations!");
      break;
    } else if (computerPoints == 3) {
      console.log("You Lost.. Good luck next time.");
      break;
    }
  }

  let play = prompt("Do you want to play more? yes or no:");
  while(play != "yes" && play != "no"){
    play = prompt("Do you want to play more? yes or no:");
    if (play.toLowerCase() == "yes") {
        playerPoints = 0;
        computerPoints = 0;
        game();
      } else if (play.toLowerCase() == "no"){
        return;
      }
  }
}

game();
