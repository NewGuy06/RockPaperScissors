function getComputerChoice() {
    const rockpaperscissors = ["Rock", "Paper", "Scissors"];
    return rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)];
}

function getHumanChoice() {
    let input = prompt("Enter Rock, Paper or Scissors :");
    return input;
};

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

for (let i =0; i < 5; i++) {

    function playRound(humanChoice, computerChoice) {
        let h_choice = humanChoice.toLowerCase();
        let c_choice = computerChoice.toLowerCase();
        if (
            (h_choice === "rock" && c_choice === "scissors") ||
            (h_choice === "scissors" && c_choice === "paper") ||
            (h_choice === "paper" && c_choice === "rock") 
        ) {
            humanScore += 1;
            return `You Win! ${h_choice} beats ${c_choice}`;
        } else if (h_choice === c_choice) {
            return "It's a tie!";
        } else {
            computerScore += 1;
            return `You Lose! ${c_choice} beats ${h_choice}`;
        }
    }

    const humanSelection = getHumanChoice();
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(humanSelection, computerSelection));
};

return `Your score is : ${humanScore}, Computer Score is : ${computerScore}`;

};

console.log(playGame());