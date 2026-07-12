
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];

    let humanChoice = prompt("Напиши rock, paper или scissors");

    if (humanChoice === null) {
        return null;
    }

    humanChoice = humanChoice.toLowerCase();

    while (!choices.includes(humanChoice)) {
        console.log("Wrong answer");

        humanChoice = prompt("Напиши rock, paper или scissors");

        if (humanChoice === null) {
            return null;
        }

        humanChoice = humanChoice.toLowerCase();
    }

    return humanChoice;
}

function playRound(humanChoice, computerChoice){
switch(humanChoice){
    case "rock":
        if (computerChoice === "rock") {
            console.log("Draw!");}
        else if (computerChoice === "paper")
            {
            console.log ("ComPuter won!");
            computerScore++;
        }
        else{
            console.log("Human won!");
            humanScore++;
        }
break;

    case "paper":
        if (computerChoice === "paper") {
            console.log("Draw!");}
        else if (computerChoice === "scissors")
            {
            console.log ("ComPuter won!");
            computerScore++;
        }
        else{
            console.log("Human won!");
            humanScore++;
        }
        break;
        
    
    case "scissors":
        if (computerChoice === "scissors") {
            console.log("Draw!");}
        else if (computerChoice === "rock")
            {
            console.log ("ComPuter won!");
            computerScore++;
        }
        else{
            console.log("Human won!");
            humanScore++;
        }
        break;
}
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();

        if (humanChoice === null) {
            console.log("Game cancelled.");
            return;
        }

        playRound(humanChoice, getComputerChoice());
    }
}

playGame();

console.log("Human:", humanScore);
console.log("Computer:", computerScore);

if (humanScore > computerScore) {
    console.log("Human wins the game!");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
} else {
    console.log("It's a draw!");
}