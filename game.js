//global variables
let humanScore = 0;
let computerScore = 0;
let gameRounds = 0;

//document elements
const victor = document.getElementById("victor");
const state = document.getElementById("state");
const compScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");
const rounds = document.getElementById("rounds");
const results = document.getElementById("results");
const again = document.getElementById("postGame");

function computerPlay() {
    //assigns a random number to a variable
    let choice = Math.floor(Math.random()*3);

    //return a string associated with one of the possible numbers
    return choice === 0 ? "rock"
            : choice === 1 ? "paper"
            : choice === 2 ? "scissors"
            : "ERROR";
    }

function playRound(val) {
    //if game is at 4 rounds or less, play on
    if(gameRounds  <= 4) {
        gameRounds++;
        rounds.innerHTML = `Round ${gameRounds} of 5`;

        //assign variables to be case insensitive
        let playerChoice = val.toUpperCase();
        let computerChoice = computerPlay().toUpperCase();

        //checks for a tie first before checking matchup
        if(playerChoice === computerChoice) {
            results.innerHTML = "It's a tie!"
        }
        
        //determines matchup results based on player's choice. Each case has a win or loss scenario, incrementing the winner's score
        switch (playerChoice) {
            case "ROCK":
                if(computerChoice === "SCISSORS"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "PAPER") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;

            case "PAPER":
                if(computerChoice === "ROCK"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "SCISSORS") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;

            case "SCISSORS":
                if(computerChoice === "PAPER"){
                    humanScore++;
                    playerScore.innerHTML = `${humanScore}`;
                    results.innerHTML = `You won! ${playerChoice} beats ${computerChoice}!`;
                    break;
                } else if(computerChoice === "ROCK") {
                    computerScore++;
                    compScore.innerHTML = `${computerScore}`;
                    results.innerHTML = `You lose! ${playerChoice} loses to ${computerChoice}!`;
                    break;
                }
                break;
        }
    }

    // if game is at 5 rounds, end game with appropriate winner message
    if(gameRounds == 5) {
        state.innerHTML = "Game over!";
        again.style.display = "block";
        if(humanScore == computerScore){
            victor.innerHTML = "It's a draw";
        }
        else if(humanScore > computerScore) {
            victor.innerHTML = "You Won!"
            victor.style.color = "aqua";
        }
        else if(humanScore < computerScore) {
            victor.innerHTML = "You Lost!"
            victor.style.color = "yellow";
        }
    }
}

//resets values for new game
function restart() {
    //resets global variables
    gameRounds = 0;
    humanScore = 0;
    computerScore = 0;

    //resets text on page
    compScore.innerHTML = `${computerScore}`;
    playerScore.innerHTML = `${humanScore}`;
    rounds.innerHTML = "Round 0 of 5";
    results.innerHTML = "Begin!";
    state.innerHTML = "";
    victor.innerHTML = "";
    again.style.display = "none";
}



//runs the game for 5 rounds, displaying scores and results of each round in console -- initial goal of project -- now unused
/*
function game() {
    for(let i=0; i<5; i++) {
        let playerSelection = playerChoice;
        let computerSelection = computerPlay();
        console.log(`${playRound(playerSelection,computerSelection)} Scores: P=${humanScore} || C=${computerScore}`);
    }
    //displays a message indicating if you won, lost or tied the computer
    return humanScore > computerScore ? console.log("You Won!")
            : humanScore === computerScore ? console.log("It's a tie!")
            : console.log("You Lost!");

}
*/