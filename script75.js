let a = {
    name : "khush",
    // run:()=>{
    //     alert("Hii")
    // }
}
console.log(a)

let p = {
    run:()=>{
        alert("Hello")
    }
}

a.__proto__= p
a.run()
console.log(a.name)