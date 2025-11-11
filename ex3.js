let rndmJokes = Math.floor(Math.random()*jokes.length)
// console.log(jokes)
// console.log(jokes[rndmJokes])

let tellJoke = true;
tellJoke = confirm("Click! ok for joke")
    if(tellJoke){
    alert(jokes[rndmJokes])
}
    else{
    alert("bie")
}
