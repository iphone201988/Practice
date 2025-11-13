async function fakeHacking(){
let a = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Initialiing Hack Program...")
        },1000)
    })
}
let b = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Hacking Khush UserName...")
        },4000)
    })
}
let c = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Username Found khuxhhh")
        },7000)
    })
}
let d = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Connecting To Instagram")
        },11000)
    })
}
let callA = await a()
    console.log(callA)

let callB = await b()
    console.log(callB)

let callC = await c()
    console.log(callC)

let callD = await d()
    console.log(callD)    
}

fakeHacking()
