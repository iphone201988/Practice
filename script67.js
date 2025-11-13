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

let mainFunc = async () => {
  let todo = await createTodo();
  console.log(todo);
};
mainFunc();
