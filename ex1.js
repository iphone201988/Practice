let rndmNo = Math.floor(Math.random()*100)
let chances = 0
let guess;
while(true) {
    guess = parseInt(prompt("Enter a Number between 0to100"))
    chances++;

    if(guess === rndmNo){
    alert("you guess the corred no:"+chances)
}
    else if(guess > rndmNo){
    alert("try a smaller No.")
}
    else if(guess< rndmNo){
    alert("try a greater No.")
}
}