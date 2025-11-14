class RailwayForm{
    submit(){
        alert(this.name + " : form submitted")
    }
    cancel(){
        alert(this.name + " : form cancelled")
    }
    fill(input){
    this.name = input
    }
}
let khush = new RailwayForm()
khush.fill("Khush")
let varun = new RailwayForm()
varun.fill("Varun")

khush.submit()
varun.cancel()
console.log( new RailwayForm())