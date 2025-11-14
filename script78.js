class Animal{
    constructor(name,color){
        this.name = name
        this.color = color
    }
    run(){
        console.log(this.name + " is running!")
    }
    shout(){
        console.log(this.name + " is shouting!")
    }
}

class Monkey extends Animal{
    eatBanana(){
        console.log(this.name + " is eatting Banana!")
    }
}
 let ani = new Animal("Dogesh","Brown")
 let m = new Monkey("Monkey","orange")

 ani.shout()
m.run()