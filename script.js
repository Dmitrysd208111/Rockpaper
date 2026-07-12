
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let humanChoice = prompt("Напиши rock, paper или scissors").toLowerCase();
    while (!choices.includes(humanChoice)) {
        console.log("Wrong answer");
        humanChoice = prompt("Напиши rock, paper или scissors").toLowerCase();
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
    default:
        console.log("Wrong word");
        break;
}
}

playRound(getHumanChoice(), getComputerChoice());

console.log("Human:", humanScore);
console.log("Computer:", computerScore);