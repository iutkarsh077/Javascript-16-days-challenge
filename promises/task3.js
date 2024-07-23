//Task 5 , 6 , 7;
const promiseData = new Promise((resolve, reject) => {
  const res = fetch("https://jsonplaceholder.typicode.com/todos");
  res
    .then((response) => {
      if (!response.ok) {
        resolve("Response is not ok");
      }
      return response.json();
    })
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject("Something went wrong: " + error);
    });
});


async function handleData(){
    try {
        const res = await promiseData;
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

handleData()