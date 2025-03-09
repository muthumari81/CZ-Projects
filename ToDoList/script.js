function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    
    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleComplete(task) {
    task.classList.toggle("completed");
}

function removeTask(button) {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(button.parentElement);
}
