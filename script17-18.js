let num=[1,2,3,4,5];
let b =num.toString();
console.log(b, typeof b);

let c=num.join("-");
console.log(c, typeof c);

num.pop();
console.log(num.length);

delete num[1];
console.log(num);

let numMore=[11,22,33,44,55];
let newArray=num.concat(numMore);
console.log(num,numMore)

num.splice(2,0,"khush","ahuja");
console.log(num);