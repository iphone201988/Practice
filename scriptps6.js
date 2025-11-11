//1
    const canDrive=()=>{
        return age>18?true:false
    }
let age;    
let runAgain = true;
while(runAgain){
    age=prompt("Enter your age")
    age= Number.parseInt(age)
    
    if(canDrive(age)){
        alert("You can drive")
    }
    else{
        alert("you can't drive")
    }
    runAgain = confirm("You want to enter your age again?")
}