let createTodo = async () => {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Khush",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

let getf = async()=>{
  let response = await fetch("https://jsonplaceholder.typicode.com/posts")
  let r = await response.json()
  return r 
}

let mainFunc = async () => {
  let todo = await createTodo();
  console.log(todo);
  console.log(await getf())
};
mainFunc()

let a = fetch('https://jsonplaceholder.typicode.com/posts/101')
a.then((value1)=>{
    return value1.json()
}).then((value2)=>{
    console.log(value2)
})