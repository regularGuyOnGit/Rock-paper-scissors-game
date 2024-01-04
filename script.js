
// ? Storing users input;
const user_input = prompt("Please select from Rock,Paper,Scissors")

// ? Just an array to store options of the game it will get selected randomly;
const game_choices = ["Rock","Paper","Scissors","Rock","Paper","Scissors","Rock","Paper","Scissors","Rock","Paper"];

// ? variable will store random option 
const computer_choice = game_choices[(Math.random().toFixed(1) * 10)];


// ? comparison happens inside and winner,looser,draw statement will be displayed
function gameRule(user_input,computer_choice){

    let normalised_user_input = user_input.toLowerCase();
    let normalised_computer_input = computer_choice.toLowerCase();

    if(normalised_user_input === "rock" && normalised_computer_input === "rock"){
        console.log("Match Draw");
    }
    else if  ( normalised_user_input ==="rock" && normalised_computer_input==="paper"){
        console.log("Computer Won");
    }
    else if( normalised_user_input === "rock" && normalised_computer_input ==="scissors"){
        console.log("Player Won!");
    }

    else if (normalised_user_input === "paper" && normalised_computer_input==="rock"){
        console.log("Player Won");
    }
    else if(normalised_user_input === "paper" && normalised_computer_input==="paper"){
        console.log("Match Draw");
    }

    else if(normalised_user_input === "paper" && normalised_computer_input==="scissors"){
        console.log("Computer Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="rock"){
        console.log("Computer Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="paper"){
        console.log("Player Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="scissors"){
        console.log("Match Draw");
    }

   else{
    alert("Please enter a valid command")
   }

}

//! calling the function 

gameRule(user_input,computer_choice)
