  let age = prompt("what's your age?")
  age = Number.parseInt(age)
  /*
  if(age>19 && age<20){
    console.log("Your age lies between 10 and 20")
  }
  else{
    console.log("Your age doesnt lies betweem 10 and 20")
  }
    */
  switch(age){
    case 12:
        console.log("Your age is 12")
    case 13:
        console.log("Your age is 13")
    case 14:
        console.log("Your age is 14")
    case 15:
        console.log("Your age is 15")
    default:
        console.log("your age is not special")
  }