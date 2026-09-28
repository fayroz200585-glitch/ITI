var playeronechoice = "Rock";
var playertwochoice = "scissors";

if (playeronechoice === playertwochoice) {
    console.log("It's a tie!");
}

else if (playeronechoice === "Rock" && playertwochoice === "scissors") {
    console.log("Player one wins! Rock beats scissors.");
}

else if (playertwochoice === "Rock" && playeronechoice === "scissors") {
    console.log("Player two wins! Rock beats scissors.");
}

else if (playeronechoice === "Paper" && playertwochoice === "Rock") {
    console.log("Player one wins! Paper beats Rock.");
}

else if (playertwochoice === "Paper" && playeronechoice === "Rock") {
    console.log("Player two wins! Paper beats Rock.");
}

else if (playeronechoice === "scissors" && playertwochoice === "Paper") {
    console.log("Player one wins! Scissors beats Paper.");
}

else if (playertwochoice === "scissors" && playeronechoice === "Paper") {
    console.log("Player two wins! Scissors beats Paper.");
}
            
            
                    
    