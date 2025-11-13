let loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src);
    };
    document.body.appendChild(script);
  });
};
/*
let a = async () => {
  let b = await loadscript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
  );
  console.log(b)
}

a()
*/


let p =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject(new Error("hey i'm error"))
        },2000)
    })
}
let c = async()=>{
    try{
        let d = await p()
        console.log(d) 
    }catch(err){
        console.log("error handled")
    }
}
c()