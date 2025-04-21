function getComputerChoice(rockpaperscissors) {
    return rockpaperscissors[Math.floor(Math.random() * rockpaperscissors.length)];
}

const rockpaperscissors = ["rock", "paper", "scissors"];
console.log(getComputerChoice(rockpaperscissors));