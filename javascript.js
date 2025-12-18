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
    return prompt("Enter your choice from rock, paper or scissors: ").trim().toLowerCase();
}
// console.log(getHumanChoice());

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
function playRound(humanChoice, computerChoice, scores) {
    const winner = whoWins(humanChoice, computerChoice);
    if (winner === "human") {
        console.log(`Yay! ${humanChoice} beats ${computerChoice}. You win!`);
        scores.humanScore++;
    } else if (winner === "computer") {
        console.log(`Sad! ${computerChoice} beats ${humanChoice}. You lose!`);
        scores.computerScore++;
    } else {
        console.log(`Both chose ${humanChoice}. There's a tie!`);
    }
}

function playGame(){
    let scores={
        humanScore: 0,
        computerScore: 0
    }
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice(),scores);
    }
    console.log(`Your score: ${scores.humanScore}\nComputer's Score: ${scores.computerScore}`);
}

playGame();

