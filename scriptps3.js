let marks = {
    khush: 34,
    john: 78,
    jane: 99,
}

marks.khush
marks['khush']
// 1.
for(let i=0; i<Object.keys(marks).length; i++) {
     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[
        Object.keys(marks)[i]
    ]);
}
// 2.
for(let key in marks) {
    // console.log("The marks of " + key + " are " + marks[key]);
}
// 3.
// let cn = 40;
// let i 
// while(i!=cn) {
    // i=prompt("Enter thenumber: ");
    // console.log("Try again");
// }
console.log("You have entered the correct number");
// 4.