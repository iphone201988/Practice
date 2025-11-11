let num=[1,2,3,4,5];
for(let i=0; i<num.length; i++) {
    console.log(num[i]);
}

num.forEach((element)=> {
    console.log(element*element);}
)

for(let i of num) {
    console.log(i);
}