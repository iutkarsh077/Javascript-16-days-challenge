//Task 1 & 2
/*const book = {
    title: "Spider-man",
    author: "James web",
    year: 2024
}

console.log(book);
console.log("Title is: ", book.title);
console.log("Author is: ", book.author);

//Task 2;
const book2 = {
    title: "Spider-man",
    author: "James web",
    year: 2024,
    getStr: function(){
        return `The Title of book is ${this.title} and author is ${this.author}`;
    }
};
console.log(book2.getStr());

//Task 4
const book3 = {
    title: "Spider-man",
    author: "James web",
    year: 21211,
    getStr: function(year){
        this.year = year;
        return `The Title of book is ${this.title} and author is ${this.author}, year of publication is ${this.year}`;
    }
};
console.log(book3.getStr(2099));
console.log(book3.year)
*/

//Task 5
/*const obj = {
  name: "myobject",
  library: {
    name: "Iron man",
    books: [
      {
        id: 1,
        name: "Alice",
        age: 25,
        profession: "Engineer",
      },
      {
        id: 2,
        name: "Bob",
        age: 30,
        profession: "Designer",
      },
      {
        id: 3,
        name: "Charlie",
        age: 35,
        profession: "Teacher",
      },
      {
        id: 4,
        name: "David",
        age: 40,
        profession: "Developer",
      },
      {
        id: 5,
        name: "Eve",
        age: 45,
        profession: "Manager",
      },
    ],
  },
};
console.log(obj.library)

//Task 6
const obj = {
    name: "myobject",
    library: {
        name: "Iron man",
        books: [
            {
                id: 1,
                name: "Alice",
                age: 25,
                profession: "Engineer",
            },
            {
                id: 2,
                name: "Bob",
                age: 30,
                profession: "Designer",
            },
            {
                id: 3,
                name: "Charlie",
                age: 35,
                profession: "Teacher",
            },
            {
                id: 4,
                name: "David",
                age: 40,
                profession: "Developer",
            },
            {
                id: 5,
                name: "Eve",
                age: 45,
                profession: "Manager",
            },
        ],
    },
};
obj.library.books.map((val)=>(
    console.log(`The name is ${val.name} and age is ${val.age}`)
))


//Task 7
const book4 = {
    title: "Thor",
    year: 2088,
    myMethod: function(){
        return this.title + this.year
    }
}
console.log(book4.myMethod())

//Task 8
const books = [
    {
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
    },
    {
        name: "1984",
        author: "George Orwell",
        year: 1949,
    },
    {
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925,
    },
    {
        name: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951,
    },
    {
        name: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
    },
];
*/

/*for(let item in books){
    console.log(`The name of the book is ${books[item].name} and the year of publication is ${books[item].year}`)
}*/

/*books.forEach((book) => {
    const keys = Object.keys(book);
    const values = Object.values(book);
  console.log(
    `The name of the book is ${
      values[keys.indexOf("name")]
    } and the year of publication is ${values[keys.indexOf("year")]}`
  );
});
*/