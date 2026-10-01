let myDiv = document.createElement(`div`);
let container = document.querySelector(`.space`);

container.appendChild(myDiv);

myDiv.setAttribute("class", "demo");
myDiv.setAttribute("id", "dom");

let message = document.createTextNode("Hello from js");

myDiv.appendChild(message);