let btn = document.getElementsByTagName("button")[0];
console.log(btn);

let a = () => {
  alert("Hello");
};
let b = () => {
  alert("Hii");
};
btn.addEventListener("click", a);
btn.addEventListener("click", b);

let input = prompt("enter a no.");
if (input == 2) {
  btn.removeEventListener("click", a);
}
