// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("after 2 sec");
//     resolve(10);
//   }, 2000);
// });
// p1.then((value) => {
//         console.log(value);
//         let p2 = new Promise((resolve, reject) => {
//             setTimeout(() => {resolve("promise 2");}, 2000)
//   })
//   return p2
// }).then((value) => {
//         console.log("We are almost done");
//         return 2
// }).then((value) => {
//         console.log("We are done");
// })
// console.log(p1)

