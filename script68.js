console.log(document.cookie)
document.cookie = "name = khush9878"
document.cookie = "name2 = khush2006"
let key = prompt("Enter Your Key")
let value = prompt("Enter Your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)