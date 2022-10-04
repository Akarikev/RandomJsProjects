const totalScore = { computerScore: 0, playerScore: 0 };
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock";

// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
    const rpsChoice = ["Rock", "Paper", "Scissors"];

    const randomNumber = Math.floor(Math.random() * 3);
    return rpsChoice[randomNumber];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    let score;

    // return the result of score based on if you won, drew, or lost
    // All situations where human draws, set `score` to 0

    if (playerChoice == computerChoice) {
        score = 0;
        // All situations where human wins, set `score` to 1
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        score = 1;
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        score = 1;
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        score = 1;
    } else {
        score = -1;
    }
    // make sure to use else ifs here
    // Otherwise human loses (aka set score to -1)
    // return score
    return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById("result");
    const handsDiv = document.getElementById("hands");
    const playerScoreDiv = document.getElementById("player-score");

    if (score == -1) {
        resultDiv.innerText = "You lose";
    } else if (score == 0) {
        resultDiv.innerText = "its a tie";
    } else {
        resultDiv.innerText = "you won";
    }

    handsDiv.innerText = `👦${playerChoice} vs 🤖${computerChoice}`;
    playerScoreDiv.innerText = ` Your Score: ${totalScore["playerScore"]}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
    console.log(playerChoice);
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice, computerChoice);
    totalScore["playerScore"] += score;
    showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    const rpsButtons = document.querySelectorAll(".rpsButton");
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);

    rpsButtons.forEach((rpsButton) => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value);
    });

    const endGameButton = document.getElementById("endGameButton");
    endGameButton.onclick = () => endGame(totalScore);
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {
    totalScore["playerScore"] = 0;
    totalScore["computerScore"] = 0;

    let playerScoreDiv = document.getElementById("player-score");
    let handsDiv = document.getElementById("hands");
    let resultDiv = document.getElementById("result");

    playerScoreDiv.innerText = "";
    handsDiv.innerText = "";
    resultDiv.innerText = "";
}

playGame();