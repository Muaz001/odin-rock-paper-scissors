function getComputerChoice()
{
    let number = Math.floor(Math.random() * 3);

    if (number === 0) {
        number = "Rock";
    }
    else if (number === 1) {
        number = "paper";
    }
    else {
        number = "scissors";
    }

    console.log(number);
}
 getComputerChoice();