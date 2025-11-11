let choice =["Stone","Paper","Scissor"]
let rndmChoice; 
let runAgain = true;
let userInput;
while(runAgain){
    rndmChoice =choice[Math.floor(Math.random()*choice.length)]
    userInput=prompt("Stone , Paper or Scissor")

    if(userInput === rndmChoice){
        alert("Draw and computer choose "+rndmChoice)
    }
    else if( 
        (userInput === "Stone" && rndmChoice ==="Scissor")||
        (userInput === "Scissor" && rndmChoice ==="Paper")||
        (userInput === "Paper" && rndmChoice === "Stone"))
        {
            alert("Won! and computer choose "+rndmChoice)
    }
    else{
        alert("lose! and computer choose "+rndmChoice)
    }
    runAgain = confirm("You want to play again?")
}