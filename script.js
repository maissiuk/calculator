let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

const container = document.querySelector("#container");

function getComputerChoice () {
   let a = Math.floor(Math.random() * 3) + 1;
    if (a === 1) {
        return "rock";
    }
    else if (a === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function handleButtonClick(humanChoice) {
  if (roundsPlayed >= maxRounds) return; // Stop after 5 rounds

  playRound(humanChoice, getComputerChoice());
  roundsPlayed++;

  if (roundsPlayed === maxRounds) {
      showPlayAgainButton();
  }
}

document.getElementById("rock").addEventListener("click", () => handleButtonClick("rock"));
document.getElementById("paper").addEventListener("click", () => handleButtonClick("paper"));
document.getElementById("scissors").addEventListener("click", () => handleButtonClick("scissors"));



  function playRound(humanChoice, computerChoice) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = `You chose: ${humanChoice}`;

    const comp = document.createElement("p");
    comp.classList.add("comp");
    comp.textContent = `Computer chose: ${computerChoice}`;

    container.appendChild(content);
    content.appendChild(comp);
  
    if (humanChoice === computerChoice) {
        const tie = document.createElement("p");
        tie.classList.add("tie");
        tie.textContent = "It's a tie!";
        content.appendChild(tie);
        return;
    }
  
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };
  
    if (winConditions[humanChoice] === computerChoice) {
        const win = document.createElement("p");
        win.classList.add("win");
        win.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        content.appendChild(win);
        humanScore++;
    } else {
        const lose = document.createElement("p");
        lose.classList.add("lose");
        lose.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        content.appendChild(lose);
        computerScore++;
    }
  
    const score = document.createElement("p");
    score.classList.add("score");
    score.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    content.appendChild(score);
}
  function showPlayAgainButton() {
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.classList.add("play-again");
    playAgainBtn.addEventListener("click", resetGame);
    container.appendChild(playAgainBtn);
}
    
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  container.innerHTML = ""; // Clear previous results
}
        

