let loadscript = (src)=>{
    return new Promise((resolve,reject)=>{    
        let script =document.createElement("script")
        script.src=src;
        document.body.appendChild(script)
        script.onload=()=>{
            console.log(src)
            resolve("Script loaded")
        }
        script.onerror=()=>{
            reject(0)
        }
    })
}
let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("src has error")
})
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("after 2 sec");
//     resolve(10)
//     // reject(new Error("error"));
//   }, 2000);
// });
// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("promise 2");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("We are almost done");
//     return 2;
//   })
//   .then((value) => {
//     console.log("We are done");
//   });
// console.log(p1)