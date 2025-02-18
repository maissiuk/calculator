let b = 0;
function getComputerChoice (b) {
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
console.log(getComputerChoice(b))