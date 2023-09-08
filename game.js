let computerSelection = "";
let computerPoints = 0;
let playerSelection = "";
let playerPoints = 0;

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");

const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

const fightInfo = document.querySelector('#fight-info');
const result = document.querySelector('#result');

const btnReset = document.querySelector('#btn-reset');
btnReset.disabled = true;

function playRound(playerSelection) {
  computerSelection = getComputerChoice();
  fightInfo.innerHTML += `<div>Computer chose ${computerSelection}!</div>`;
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection == "rock" && computerSelection == "rock") {
    fightInfo.innerHTML += `<div>It's a Tie! Rock against Rock!</div>`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    fightInfo.innerHTML += `<div>You Lose! Paper beats Rock!</div>`;
    computerPoints++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    fightInfo.innerHTML += `<div>You Win! Rock beats Scissors!</div>`;
    playerPoints++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    fightInfo.innerHTML += `<div>You Win! Paper beats Rock!</div>`;
    playerPoints++;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    fightInfo.innerHTML += `<div>It's a Tie! Paper against Paper!</div>`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    fightInfo.innerHTML += `<div>You Lose! Scissors beats Paper!</div>`;
    computerPoints++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    fightInfo.innerHTML += `<div>You Lose! Rock beats Scissors!</div>`;
    computerPoints++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    fightInfo.innerHTML += `<div>You Win! Scissors beats Paper!</div>`;
    playerPoints++;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    fightInfo.innerHTML += `<div>It's a Tie! Scissors against Scissors!</div>`;
  }

  playerScore.textContent = `${playerPoints}`;
  computerScore.textContent = `${computerPoints}`

  if (playerPoints == 3) {
    result.style.cssText = "color: green;";
    result.textContent = `You're the Winner! Congratulations!`;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnReset.disabled = false;
    btnReset.addEventListener("click", () => {
      resetGame();
    });
  } else if (computerPoints == 3) {
    result.style.cssText = "color: red;";
    result.textContent = `You Lost.. Good luck next time.`;
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
    btnReset.disabled = false;
    btnReset.addEventListener("click", () => {
      resetGame();
    });
  }
}

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

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;
    result.textContent = ``;
    fightInfo.textContent = '...';
    playerScore.textContent = `0`;
    computerScore.textContent = `0`
    btnReset.disabled = true;
}


btnRock.addEventListener("click", () => {
  playerSelection = "rock";
  fightInfo.textContent = 'Player chose Rock!';
  playRound(playerSelection);
});

btnPaper.addEventListener("click", () => {
  playerSelection = "paper";
  fightInfo.textContent = 'Player chose Paper!';
  playRound(playerSelection);
});

btnScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  fightInfo.textContent = 'Player chose Scissors!';
  playRound(playerSelection);
});