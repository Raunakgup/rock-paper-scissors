// console.log("Hello world!")

function getComputerChoice() {
    const val = Math.random();
    switch (true) {
        case val >= 0 && val < 1 / 3:
            return "rock";
        case val >= 1 / 3 && val < 2 / 3:
            return "paper";
        case val >= 2 / 3 && val < 1:
            return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice from rock, paper or scissors: ").toLowerCase();
}
// console.log(getHumanChoice());

let humanScore = computerScore = 0;

function whoWins(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return "tie";
    switch (true) {
        case humanChoice === "rock" && computerChoice === "paper":
            return "computer";
        case humanChoice === "rock" && computerChoice === "scissors":
            return "human";
        case humanChoice === "paper" && computerChoice === "rock":
            return "human";
        case humanChoice === "paper" && computerChoice === "scissors":
            return "computer";
        case humanChoice === "scissors" && computerChoice === "paper":
            return "human";
        case humanChoice === "scissors" && computerChoice === "rock":
            return "computer";
    }
}
function playRound(humanChoice, computerChoice) {
    const winner = whoWins(humanChoice, computerChoice);
    if (winner === "human") {
        console.log(`Yay! ${humanChoice} beats ${computerChoice}. You win!`);
        humanScore++;
    } else if (winner === "computer") {
        console.log(`Sad! ${computerChoice} beats ${humanChoice}. You lose!`);
        computerScore++;
    } else {
        console.log(`Both chose ${humanChoice}. There's a tie!`);
    }
}



