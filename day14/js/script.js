// Part 1
const fruits = ["Apple", "Banana", "Orange"];

//Print each item using for...of
for (const fruit of fruits) {
    console.log(fruit);
}

//Print index using for...in
for (const index in fruits) {
    console.log(index);
}

//Print formatted output using forEach
fruits.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});


// Part 5 - To Do

// Q1: Convert function to Arrow Function
const sum = (a, b) => a + b;

// Q2: Use Destructuring to get name and age
const user = {
    name: "Mostafa",
    age: 25
};
const { name, age } = user;

// Q3: Use Template Literal instead of string concatenation
console.log(`Hello ${name}`);

// Q4: Use Spread Operator to combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];


// Part 6 - Many Q
const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

//Array of student names only
const studentNames = students.map(student => student.name);

//Array of students with degree >= 60
const passedStudents = students.filter(student => student.degree >= 60);

//First student with degree > 90
const topStudent = students.find(student => student.degree > 90);

//Print student names using forEach
students.forEach(student => {
    console.log(student.name);
});


//Bonus
const numbers = [5, 10, 15, 20];
const total = numbers.reduce((acc, current) => acc + current, 0);
console.log(total);