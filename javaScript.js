let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);  // Generates a random number between 0, 1, 2
    let comp_choice = undefined;

    if (number === 0) {
        comp_choice = "Rock";
    }
    else if (number === 1) {
        comp_choice = "paper";
    }
    else {
        comp_choice = "scissors";
    }
    return comp_choice; 
}


function getHumanChoice () {
    let human_choice = prompt("What do you choose? Rock, paper or scissors?");

    human_choice = human_choice.toLowerCase()

    if (human_choice === "rock") {
        return human_choice;
    }
    else if (human_choice === "paper") {
        return human_choice;
    }
    else if (human_choice === "scissors") {
        return human_choice;
    }
    else {
        return "Please enter a valid choice.";
    }
}


function playRound (computer_choice, human_choice) {
    if (computer_choice === "rock" && human_choice === "paper" ||
    computer_choice === "paper" && human_choice === "scissors" ||
    computer_choice === "scissors" && human_choice === "rock") {
        humanScore += 1;

        const results = document.querySelector(".results");
        results.textContent = `You Win! ${human_choice} beats ${computer_choice}.`;
        const scores = document.querySelector(".scores");
        scores.textContent = `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
    } 
    else if (computer_choice === "paper" && human_choice === "rock" ||
    computer_choice === "rock" && human_choice === "scissors" ||
    computer_choice === "scissors" && human_choice === "paper") {
        computerScore += 1;

        const results = document.querySelector(".results");
        results.textContent = `You lose! ${computer_choice} beats ${human_choice}`;
        const scores = document.querySelector(".scores");
        scores.textContent = `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
    } 
    else {
        const results = document.querySelector(".results");
        results.textContent = "It's a tie!";
        const scores = document.querySelector(".scores");
        scores.textContent = `Your Score: ${humanScore} Computer's Score: ${computerScore}`;
    }
}



const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (button) => {
    let human_choice = button.target.className;
    let computer_choice = getComputerChoice();
    playRound(computer_choice, human_choice);
});