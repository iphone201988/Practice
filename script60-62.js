let a = setTimeout(() => {
  console.log("A");
}, 1000);

let b = setTimeout(() => {
  console.log("B");
}, 2000);

let c = setTimeout(() => {
  console.log("C");
}, 3000);

let d = setTimeout(() => {
  console.log("D");
}, 4000);

let e = setTimeout(() => {
  console.log("E");
}, 5000);

setTimeout(() => {
  try {
    console.log(hello);
  } catch (error) {
    // setTimeout(()=>{
    //     console.log("hii")
    // },10000)
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
  }
}, 6000);

setTimeout(() => {
  try {
    let age = prompt("Enter Your Age");
    age = Number.parseInt(age);
    if (age > 80) {
      throw new ReferenceError("This is probably not true");
    }
    else{
        alert("ok")
    }
  } catch (error) {
    // setTimeout(()=>{
    //     console.log("hii")
    // },10000)
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
    // console.log(error.stack);
  }
  finally{
    console.log("hello")
  }
}, 7000);
