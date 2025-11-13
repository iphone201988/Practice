let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20)
        // reject(new Error("error"))
    },2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },3000)
})
let promise_all = Promise.all([p1,p2,p3])
// let promise_all = Promise.allSettled([p1,p2,p3])
// let promise_all = Promise.race([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
})