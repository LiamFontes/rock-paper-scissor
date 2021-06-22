function playRound(playerSelection) {
    if (document.getElementById("computerScore").textContent === "5" || document.getElementById("playerScore").textContent === "5"){
        ResetScore()  
        return
    }
    let playChoice = null;
    let winner = null;
    if (playerSelection === "rockImage") {
        playChoice = "rock";
    }

    if (playerSelection === "paperImage") {
        playChoice = "paper";
    }

    if (playerSelection === "scissorImage") {
        playChoice = "scissor";
    }

    const rockOption = "rock";
    const scissorOption = "scissor";
    const paperOption = "paper";

    computerChoice = computerPlay();

    if (playChoice === computerChoice) {
    result = `Both chose ${playChoice}, try to outsmart the machine!`;
}

/* USER CHOOSES SCISSOR*/
else if (playChoice === scissorOption && computerChoice === rockOption) {
    result = "Rock crushes scissors! The computer beat you this round."
    winner = "computer";
}

else if (playChoice === scissorOption && computerChoice === paperOption) {
    result = "Scissor cuts paper! Point to humankind!"
    winner = "player";
}

/* USER CHOOSES ROCK*/
else if (playChoice === rockOption && computerChoice === paperOption) {
    result = "Paper covers rock! This round goes to the machine!"
    winner = "computer";
}

else if (playChoice === rockOption && computerChoice === scissorOption) {
    result = "Rock smashes scissors! Take that computer!"
    winner = "player";
}

/* USER CHOOSES PAPER*/
else if (playChoice === paperOption && computerChoice === scissorOption) {
    result = "Scissor cuts Paper! Point for Skynet"
    winner = "computer";
}

else if (playChoice === paperOption && computerChoice === rockOption) {
    result = "Paper covers rock! Chalk one up for humanity"
    winner = "player";
}
incrementScore(winner)
MessageSend(result)
maxScoreCheck()
}



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


function incrementScore(winner){
    if (winner === "player"){
        const playerScore = document.getElementById("playerScore").innerText;
        const updatedScore = new String(Number(playerScore) + 1);
        document.getElementById("playerScore").textContent = updatedScore;
        
    }

    if (winner === "computer"){
        const computerScore = document.getElementById("computerScore").innerText;
        const updatedScore = new String(Number(computerScore) + 1);
        document.getElementById("computerScore").textContent = updatedScore;
        
    }
}

function ResetScore(){

    document.getElementById("playerScore").textContent = "0";
    document.getElementById("computerScore").textContent = "0";
    if (document.getElementById("computerScore").textContent !== "5" && document.getElementById("playerScore").textContent !== "5"){
        document.getElementById("messageDiv").textContent = "And so it begins...";    
    }
    

}

function maxScoreCheck(){

    if(document.getElementById("playerScore").innerText == "5"){
        document.getElementById("messageDiv").textContent = "Humankind Wins! Reset the score to show that silicon who's boss!";
    }
    if(document.getElementById("computerScore").innerText == "5"){
        document.getElementById("messageDiv").textContent = "Skynet is live... Reset the score to give humanity another chance!";
    
    }
}

function MessageSend(result){
    document.getElementById("messageDiv").textContent = result;

}