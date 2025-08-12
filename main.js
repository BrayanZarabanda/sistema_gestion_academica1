const form = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskDateInput = document.getElementById("task-date");
const taskList = document.getElementById("task-list");

let tasks = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = taskNameInput.value.trim();
    const date = taskDateInput.value;

    if (name === "" || date === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const newTask = { name, date };
    tasks.push(newTask);

    form.reset();

    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.name}</td>
            <td>${task.date}</td>
            <td>
                <button onclick="deleteTask(${index})">Eliminar</button>
            </td>
        `;

        taskList.appendChild(row);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
