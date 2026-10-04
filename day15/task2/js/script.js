let myInput = document.getElementById("taskInput");
let myDiv = document.getElementById("tasksList");
let addBtn = document.getElementById("add-btn")
let savedTasks = localStorage.getItem("tasks");
let tasksArray = [];

if (savedTasks !== null) {
    tasksArray = JSON.parse(savedTasks);
}

function drawTasks() {
    myDiv.innerHTML = "";
    
    for (let i = 0; i < tasksArray.length; i++) {
        myDiv.innerHTML += `
            <div class="d-flex justify-content-between align-items-center p-2 mb-2">
                <span>${tasksArray[i]}</span>
                <div>
                    <button class="btn btn-primary btn-sm" onclick="changeTask(${i})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="removeTask(${i})">Delete</button>
                </div>
            </div>
        `;
    }
}

addBtn.addEventListener("click", function() {
        if (myInput.value !== "") {
            tasksArray.push(myInput.value);
            localStorage.setItem("tasks", JSON.stringify(tasksArray));
            myInput.value = "";
            drawTasks();
        }
});

function removeTask(index) {
    tasksArray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    drawTasks();
}

function changeTask(index) {
    let newValue = prompt("Edit Task:", tasksArray[index]);
    
    if (newValue !== null && newValue !== "") {
        tasksArray[index] = newValue;
        localStorage.setItem("tasks", JSON.stringify(tasksArray));
        drawTasks();
    }
}

drawTasks();