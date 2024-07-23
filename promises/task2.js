//Task 3
const fetchDataPromise = new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            if (!response.ok) {
                reject("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject("Something went wrong: " + error);
        });
});

fetchDataPromise
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
