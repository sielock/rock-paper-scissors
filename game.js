let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    //assigns a random number to a variable
    let choice = Math.floor(Math.random()*3);

    //return a string associated with one of the possible numbers
    return choice === 0 ? "rock"
            : choice === 1 ? "paper"
            : choice === 2 ? "scissors"
            : "ERROR";
    }

function playRound(playerChoice, computerChoice) {
    //re-assign variables to be case insensitive
    playerChoice = playerChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();
    
    //checks if there is a tie first before checking matchup
    if(playerChoice === computerChoice) {
        return "It's a tie!"
    }

    //determines matchup results based on player's choice. Each case has a win or loss scenario, incrementing the winner's score
    switch (playerChoice) {
        case "ROCK":
            if(computerChoice === "SCISSORS"){
                playerScore++;
                return `You won! ${playerChoice} beats ${computerChoice}!`;
                break;
            } else if(computerChoice === "PAPER") {
                computerScore++;
                return `You lose! ${playerChoice} loses to ${computerChoice}!`;
                break;
            }
            break;
        case "PAPER":
            if(computerChoice === "ROCK"){
                playerScore++;
                return `You won! ${playerChoice} beats ${computerChoice}!`;
                break;
            } else if(computerChoice === "SCISSORS") {
                computerScore++;Rock
                return `You lose! ${playerChoice} loses to ${computerChoice}!`;
                break;
            }
            break;
        case "SCISSORS":
            if(computerChoice === "PAPER"){
                playerScore++;
                return `You won! ${playerChoice} beats ${computerChoice}!`;
                break;
            } else if(computerChoice === "ROCK") {
                computerScore++;
                return `You lose! ${playerChoice} loses to ${computerChoice}!`;
                break;
            }
        default:
            //penalizes the player for not using one of the three valid options
            computerScore++;
            return "Please enter a valid option";
    }  
}

//runs the game for 5 rounds, displaying scores at the end of each round
function game() {
    for(let i=0; i<5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors. Any other choices will give a point to the computer.");
        let computerSelection = computerPlay();
        console.log(`${playRound(playerSelection,computerSelection)} Scores: P=${playerScore} || C=${computerScore}`);
    }
    //displays a message indicating if you won, lost or tied the computer
    return playerScore > computerScore ? console.log("You Won!")
            : playerScore === computerScore ? console.log("It's a tie!")
            : console.log("You Lost!");

}

game();
