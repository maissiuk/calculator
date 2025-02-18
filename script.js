let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return;
    }
  
    const winConditions = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
  
    if (winConditions[humanChoice] === computerChoice) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }
  const humanChoice= getHumanChoice();
  const computerChoice= getComputerChoice();
  console.log(playRound(humanChoice, computerChoice))

  function playAgain () {
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        playRound(getHumanChoice(), getComputerChoice());
      }
  }
  console.log (playAgain())