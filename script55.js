let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hi")
            resolve(true)
            // reject(new Error("I'm an error"))
        },2000)
})

let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello")
            // resolve(true)
            reject(new Error("I'm an error"))
        },2000)
})
console.log(p,p1)
p.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("error in p1")
})
p1.then((value)=>{
    console.log(value)
},(error)=>{
    console.log("error in p1")
})



