function computerPlay() {

    let choice = null;

    randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        choice = "rock";

    }
    else if (randomNumber >= 0.33 && randomNumber < 0.67) {
        choice = "paper"
    }

    else {
        choice = "scissor";
    }

    return choice

}

const computerChoice = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelectionMod = playerSelection.toLowerCase();
    let winner = null;
    const rockOption = "rock";
    const scissorOption = "scissor";
    const paperOption = "paper";


    if (playerSelectionMod === computerSelection) {
        result = "Tied Round! Try again"
    }

    /* USER CHOOSES SCISSOR*/
    else if (playerSelectionMod === scissorOption && computerSelection === rockOption) {
        result = "Rock crushes scissors! The computer beat you this round."
        winner = "computer";
    }

    else if (playerSelectionMod === scissorOption && computerSelection === paperOption) {
        result = "Scissor cuts paper! Point to humankind!"
        winner = "player";
    }

    /* USER CHOOSES ROCK*/
    else if (playerSelectionMod === rockOption && computerSelection === paperOption) {
        result = "Paper covers rock! This round goes to the machine!"
        winner = "computer";
    }

    else if (playerSelectionMod === rockOption && computerSelection === scissorOption) {
        result = "Rock smashes scissors! Take that computer!"
        winner = "player";
    }

    /* USER CHOOSES PAPER*/
    else if (playerSelectionMod === paperOption && computerSelection === scissorOption) {
        result = "Scissor cuts Paper! Point for Skynet"
        winner = "computer";
    }

    else if (playerSelectionMod === paperOption && computerSelection === rockOption) {
        result = "Paper covers rock! Chalk one up for humanity"
        winner = "player";
    }

    console.log(result)

    return winner
}

function playGame() {
    const maxScore = prompt("Best of how many games?");
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 100; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?")
        let roundResult = playRound(playerSelection, computerPlay());
        console.log(roundResult)
        if (roundResult === "player") {
            playerScore += 1;
        }

        else if (roundResult === "computer") {
            computerScore += 1;
        }
        console.log(`The current score is Humans-${playerScore} : Computers-${computerScore}`);

        if (playerScore === Math.ceil(maxScore / 2)) {
            console.log("Humankind wins!");
            break;
        }


        if (computerScore === Math.ceil(maxScore / 2)) {
            console.log("The computer wins!");
            break;
        }


    }
}


playGame();