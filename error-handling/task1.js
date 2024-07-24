//Task 1
const getTodos = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todosas");
    const todos = await res.json();
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    console.log(todos);
  } catch (error) {
    console.log("Something went wrong", error);
  }
};

getTodos();
