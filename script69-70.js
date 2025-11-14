let key = prompt("Enter Key")
let value = prompt("Enter Value")
localStorage.setItem(key,value)

console.log(localStorage.getItem(key))