// Variables
var name = "fayroz"
var age = 20;
console.log(name);
console.log(age);
// Data Types
var studentName =
"fayroz";
var studentAge =
20;
var isStudnt =
true;
 var studentGrade;
var phone =
null;
console.log(studentName);
console.log(studentAge);
console.log(isStudnt);
console.log(studentGrade);
console.log(phone);
console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof isStudnt);
// Operators
var num1 = 10;
var num2 = 5;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
 var age2 =20;
 console.log(age2>18);
 console.log(age2<18);
 console.log(age2===20);
 console.log(age2!==15);
// Conditions
var studyHours = 5;

if (studyHours >= 6) {
    console.log("Great! You studied very well today.");
} else if (studyHours >= 4) {
    console.log("Good job! You had a productive day.");
} else if (studyHours >= 2) {
    console.log("You studied, but you can do more.");
} else {
    console.log("Try to study more tomorrow.");
}
// Loops
// For Loop
for (var i = 1; i <= 5; i++) {
    console.log("Study day: " + i);
}
// While Loop
var studyHours = 1;
while (studyHours <= 5) {
    console.log("Study hour: " + studyHours);
    studyHours++;
}
// Do While Loop
var studyDays = 1;
do {
    console.log("Today is study day " + studyDays);
    studyDays++;
} while (studyDays <= 5);

// Functions

function startStudying() {
    console.log("I am ready to study JavaScript.");
}
startStudying();
function sayHello(name) {
    console.log("Hello " + name);
}
sayHello("Fayroz");
function addNumbers(num1, num2) {
    return num1 + num2;
}
var result = addNumbers(10, 5);
console.log(result);
// Objects
var student = {
    name: "Fayroz",
    age: 20,
    department: "IT"
};
console.log(student.name);
console.log(student.age);
console.log(student.department);
student.age = 21;
console.log(student.age);
student.university = "German International University";
console.log(student.university)
student.introduce = function() {
    console.log("Hello, my name is " + this.name);
};
student.introduce();
// Hoisting
console.log(name);
var name = "Fayroz";
sayHello();
function sayHello() {
    console.log("Hello Fayroz!");
}


