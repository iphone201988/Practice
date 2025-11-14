class RailwayForm{
    constructor(input,formno){
    this.name = input
    this.formno = formno
    }
    submit(){
        alert(`${this.name} : form ${this.formno} submitted`)
    }
    cancel(){
        alert(`${this.name} : form ${this.formno} cancelled`)
    }
    // fill(input, trainno){
    // this.name = input
    // this.trainno = trainno
    // }
}
let khush = new RailwayForm("Khush",207)
// khush.fill("Khush")
let varun = new RailwayForm("Varun",60)
// varun.fill("Varun")

khush.submit()
varun.cancel()
console.log( new RailwayForm())