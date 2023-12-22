let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

document.querySelectorAll(".choices button").forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.textContent;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateScore();
    });
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
});

function computerPlay() {
    const choices = ["Rock", "Paper", "Cisor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let resultMessage = ""; // Message qui indique le résultat de la manche

    if (
        (playerSelection === "Rock" && computerSelection === "Cisor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Cisor" && computerSelection === "Paper")
    ) {
        playerScore++;
        resultMessage = "You win this round! " + playerSelection + " win " + computerSelection;
    } else if (
        (playerSelection === "Cisor" && computerSelection === "Rock") ||
        (playerSelection === "Rock" && computerSelection === "Paper") ||
        (playerSelection === "Paper" && computerSelection === "Cisor")
    ) {
        computerScore++;
        resultMessage = "The robot win this round ! " + computerSelection + " win " + playerSelection;
    } else {
        resultMessage = "Draw! You both choice " + playerSelection;
    }

    updateScore();
    displayResultMessage(resultMessage);
}

function displayResultMessage(message) {
    const resultMessageDisplay = document.getElementById("resultMessage");
    resultMessageDisplay.textContent = message;
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
