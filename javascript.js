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
        scores.humanScore++;
        return (`Yay! ${humanChoice} beats ${computerChoice}. You win!`);
    } else if (winner === "computer") {
        scores.computerScore++;
        return (`Sad! ${computerChoice} beats ${humanChoice}. You lose!`);
    } else {
        return (`Both chose ${humanChoice}. There's a tie!`);
    }
}

let scores = {
    humanScore: 0,
    computerScore: 0
}

const buttonContainer = document.querySelector("#button-container");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const winOrLoseList = document.querySelector("#win-or-lose-list");
const winnerAnnouncement = document.querySelector("#winner-announcement");
const body = document.querySelector("body");
const buttons = buttonContainer.querySelectorAll('button');
let restartButton = null;

function enableButtons() {
    buttons.forEach(item => {
        item.disabled = false;
        item.classList.remove("disabled");
    });
}
function resetScores() {
    scores.humanScore = 0;
    scores.computerScore = 0;
    humanScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;
}
function clearList(lst) {
    while (lst.firstChild) {
        lst.removeChild(lst.firstChild);
    }
}
function clearPara(para) {
    para.textContent = "";
}
function restartGame() {
    enableButtons();
    resetScores();
    clearList(winOrLoseList);
    clearPara(winnerAnnouncement);
    restartButton.remove();
    restartButton = null;
}
function addRestartOption() {
    restartButton = document.createElement('button');
    restartButton.textContent = "Restart";
    body.appendChild(restartButton);
    restartButton.addEventListener("click", restartGame);
}
function disableButtons() {
    buttons.forEach(item => {
        item.disabled = true;
        item.classList.add("disabled");
    });
    addRestartOption();
}
function handleButtonClick(e) {
    const target = e.target;
    if (target.tagName !== "BUTTON") return;

    const winOrLoseListElement = document.createElement('li');
    winOrLoseListElement.textContent = playRound(target.id, getComputerChoice(), scores);
    winOrLoseList.appendChild(winOrLoseListElement);

    humanScoreSpan.textContent = scores.humanScore;
    computerScoreSpan.textContent = scores.computerScore;

    if (scores.humanScore === 5) {
        winnerAnnouncement.textContent = "Congrats, You won!";
        disableButtons();
    }
    else if (scores.computerScore === 5) {
        winnerAnnouncement.textContent = "Oops, you lost!";
        disableButtons();
    }
}

buttonContainer.addEventListener("click", handleButtonClick);


