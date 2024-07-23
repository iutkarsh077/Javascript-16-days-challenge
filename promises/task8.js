//Task 8 && 9
const promiseTodo = fetch("https://jsonplaceholder.typicode.com/todos11").then((res)=>{
    if(!res.ok){
        throw new Error("Something went wrong in todos");
    }
    return res.json();
})

const promiseUser = fetch("https://jsonplaceholder.typicode.com/users11").then((res)=>{
    if(!res.ok){
        throw new Error("Something went wrong while fetching users");
    }
    return res.json();
})

const promisePosts = fetch("https://jsonplaceholder.typicode.com/posts11").then((res)=>{
    if(!res.ok){
        throw new Error("Something wnet wrong while fetching posts");
    }
    return res.json();
})

const promiseData = [promiseTodo, promiseUser, promisePosts];

async function handling(){
 try{
    const [todos, users, posts] = await Promise.race(promiseData);
    console.log("Todos: ", todos);
    console.log("Users: ", users);
    console.log("posts: ", posts);
 }
 catch(error){
    console.log(error);
 }
}

handling()