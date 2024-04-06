const userScore = 0;
const computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const scoredBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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

// scissors_comp_button.style.backgroundColor = 'tomato';
// scissors_comp_button.style.borderColor = 'tomato';
// scissors_comp_button.style.borderColor = 'tomato';
// scissors_comp_image.style.width = "60%";

console.log(userScore_span)

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
    if(userChoice === "rock") {
        compareChoices("rock", computerChoice());
    };

    if(userChoice === "paper") {
        compareChoices("paper", computerChoice());
    };

    if(userChoice === "scissors") {
        compareChoices("scissors", computerChoice());
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
      alert("It's a tie!");
      return;
    };

    if ((userChoise === "rock" && computerChoise === "scissors") || 
    (userChoise === "paper" && computerChoise === "rock") || 
    (userChoise === "scissors" && computerChoise === "paper")){
        alert(`Player Wins! ${userChoise.toUpperCase()} > ${computerChoise.toUpperCase()}`)
        return;
    } else {
        alert(`Computer Wins! ${userChoise.toUpperCase()} > ${computerChoise.toUpperCase()}`)
        return;
    };
};