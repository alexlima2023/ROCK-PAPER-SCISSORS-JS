let userScore = 0;
let computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const scoredBoard_div = document.querySelector(".score-board");
const resultText = document.querySelector("#result-text");

// PLAYER
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");
const rock_image = document.querySelector("#rock-image")
const paper_image = document.querySelector("#paper-image")
const scissors_image = document.querySelector("#scissors-image")
// COMPUTER
const rock_comp_button = document.querySelector("#rock-comp");
const paper_comp_button = document.querySelector("#paper-comp");
const scissors_comp_button = document.querySelector("#scissors-comp");
const rock_comp_image = document.querySelector("#rock-comp-image")
const paper_comp_image = document.querySelector("#paper-comp-image")
const scissors_comp_image = document.querySelector("#scissors-comp-image")

main();

function main() {
    rock_button.addEventListener("click", function() {
        game("rock");
    });
    paper_button.addEventListener("click", function() {
        game("paper");
    });
    
    scissors_button.addEventListener("click", function() {
        game("scissors");
    });
}

function game(userChoice) {
    resetStyleComputer();
    const getComputerChoice = computerChoice();
    if(userChoice === "rock") {
        changeStyleComputer(getComputerChoice);
        compareChoices("rock", getComputerChoice);
    };

    if(userChoice === "paper") {
        changeStyleComputer(getComputerChoice);
        compareChoices("paper", getComputerChoice);
    };

    if(userChoice === "scissors") {
        changeStyleComputer(getComputerChoice);
        compareChoices("scissors", getComputerChoice);
    };
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
};

function compareChoices(userChoise, computerChoise) {

    if (userChoise === computerChoise) {
        resultText.textContent = "It's a tie!";
      return;
    };

    if ((userChoise === "rock" && computerChoise === "scissors") || 
    (userChoise === "paper" && computerChoise === "rock") || 
    (userChoise === "scissors" && computerChoise === "paper")){
        resultText.textContent = `Player Wins! ${userChoise.toUpperCase()} > ${computerChoise.toUpperCase()}`;
        userScore++;
        userScore_span.textContent  = userScore;
        return;
    } else {
        resultText.textContent = `Computer Wins! ${userChoise.toUpperCase()} < ${computerChoise.toUpperCase()}`;
        computerScore++;
        compScore_span.textContent  = computerScore;
        return;
    };
};

function changeStyleComputer(computerChoice) {
    const buttons = {
        "rock": rock_comp_button,
        "paper": paper_comp_button,
        "scissors": scissors_comp_button
    };

    const images = {
        "rock": rock_comp_image,
        "paper": paper_comp_image,
        "scissors": scissors_comp_image
    };

    resetStyleComputer();

    if (buttons[computerChoice]) {
        const button = buttons[computerChoice];
        const image = images[computerChoice];

        button.style.backgroundColor = 'tomato';
        button.style.borderColor = 'tomato';
        image.style.width = "60%";
    }
}

function resetStyleComputer() {
    const buttons = [rock_comp_button, paper_comp_button, scissors_comp_button];
    const images = [rock_comp_image, paper_comp_image, scissors_comp_image];

    buttons.forEach(button => {
        button.style.backgroundColor = 'white';
        button.style.borderColor = 'white';
    });

    images.forEach(image => {
        image.style.width = "36%";
    });
};