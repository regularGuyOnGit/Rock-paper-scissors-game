
// ? Storing users input;
// const user_input = prompt("Please select from Rock,Paper,Scissors")
const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const resultDiv = document.querySelector(".result")

// ? Just an array to store options of the game it will get selected randomly;
const game_choices = ["Rock","Paper","Scissors","Rock","Paper","Scissors","Rock","Paper","Scissors","Rock","Paper"];




// ? comparison happens inside and winner,looser,draw statement will be displayed
function gameRule(user_input,computer_choice){

    let normalised_user_input = user_input.toLowerCase();
    let normalised_computer_input = computer_choice.toLowerCase();

    if(normalised_user_input === "rock" && normalised_computer_input === "rock"){
        return("Match Draw");
    }
    else if  ( normalised_user_input ==="rock" && normalised_computer_input==="paper"){
        return("Computer Won");
    }
    else if( normalised_user_input === "rock" && normalised_computer_input ==="scissors"){
        return("Player Won!");
    }

    else if (normalised_user_input === "paper" && normalised_computer_input==="rock"){
        return("Player Won");
    }
    else if(normalised_user_input === "paper" && normalised_computer_input==="paper"){
        return("Match Draw");
    }

    else if(normalised_user_input === "paper" && normalised_computer_input==="scissors"){
        return("Computer Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="rock"){
        return("Computer Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="paper"){
        return("Player Won");
    }
    else if(normalised_user_input === "scissors" && normalised_computer_input==="scissors"){
        return("Match Draw");
    }

   else{
    alert("Please enter a valid command")
   }

}

function displayResult(result){

const resultText = document.createElement('h6');
resultText.innerText = result
resultDiv.appendChild(resultText);

}


//! calling the function 

rockBtn.addEventListener('click',(e)=>{
    const computer_choice = game_choices[(Math.random().toFixed(1) * 10)];
    
   const resultOfGame= gameRule(e.target.innerText,computer_choice)
   displayResult(resultOfGame)
})
paperBtn.addEventListener('click',(e)=>{
    const computer_choice = game_choices[(Math.random().toFixed(1) * 10)];
    
   const resultOfGame= gameRule(e.target.innerText,computer_choice)
   displayResult(resultOfGame)
})
scissorsBtn.addEventListener('click',(e)=>{
    // ? variable will store random option 
const computer_choice = game_choices[(Math.random().toFixed(1) * 10)];
    
       const resultOfGame = gameRule(e.target.innerText,computer_choice)
       displayResult(resultOfGame)
       
})
