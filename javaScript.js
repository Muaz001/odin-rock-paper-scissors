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
    if (computer_choice === "rock" && human_choice === "paper") {
        humanScore += 1;
        console.log("You Win! Paper beats rock.")
    }
    else if (computer_choice === "paper" && human_choice === "scissors") {
        humanScore += 1;
        console.log("You win! Scissors beats paper.")
    }
    else if (computer_choice === "scissors" && human_choice === "rock") {
        humanScore += 1;
        console.log("You win! Rock beats Scissors.")
    }

    else if (computer_choice === "paper" && human_choice === "rock") {
        computerScore += 1;
        console.log("You lose! Paper beats rock.")
    }
    else if (computer_choice === "rock" && human_choice === "scissors") {
        computerScore += 1;
        console.log("You lose! Rock beats scissors.")
    }
    else if (computer_choice === "scissors" && human_choice === "paper") {
        computerScore += 1;
        console.log("You lose! Scissors beats paper.")
    }
    else {
        console.log("Its a tie!")
    }
}


function playGame () {
    for (i = 0; i < 5; i++) {

        let computer_choice = getComputerChoice();
        let human_choice = getHumanChoice();

        playRound(computer_choice, human_choice); 
    }

    console.log(`Your Score: ${humanScore}`);
    console.log(`Computer's Score: ${computerScore}`);

    if (computerScore > humanScore) {
        console.log("You lost! The computer won the game of 5 rounds.");
    }
    else if (humanScore > computerScore) {
        console.log("You won the game of 5 rounds!");
    }
    else {
        console.log("The game of 5 rounds is a tie!");
    }
}

playGame();