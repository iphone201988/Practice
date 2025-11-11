// map
let arr = [10, 20, 30, 40, 50];
let a = arr.map((value)=>{
    console.log(value);
    return value+1;
});

console.log(a);

// filter
let arr2 = [5, 10, 15, 20, 25];
let a2 =arr2.filter((a)=>{
    return a>10;
});
console.log(a2);

// reduce
let arr3 = [1, 2, 3, 4, 5];
let a3 = arr3.reduce((h1, h2)=>{
    return h1+h2;
});
console.log(a3);