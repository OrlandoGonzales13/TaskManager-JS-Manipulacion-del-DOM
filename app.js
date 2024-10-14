const taskForms = document.getElementById(`task-form`);
const taskList = document.getElementById(`task-list`);

loadTasks();

//AGREGAR TAREA

taskForms.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const taskInput = document.getElementById(`task-input`)
    task = taskInput.value
    //console.log(task)
    if (task) {
        taskList.append(createTaskElement(task));
        storeTaskInLocalStorage(task);
        taskInput.value = ''
    }
})

function createTaskElement(task) {
    const li = document.createElement(`li`)
    li.textContent = task
    li.append(createButton('❌', 'delete-btn'), createButton('✏️', 'edit-btn'))
    return li
}

function createButton(text, className) {
    const btn = document.createElement('span')
    btn.textContent = text
    btn.className = className
    return btn
}

//EDITAR Y ELIMINAR

taskList.addEventListener(`click`, (event) => {
    //console.log(event.target)

    if (event.target.classList.contains(`delete-btn`)) {
        deleteTask(event.target.parentElement)
    }
    else if (event.target.classList.contains(`edit-btn`)) {
        editTask(event.target.parentElement)
    }
})

function deleteTask(taskItem) {
    if (confirm(`Estás segur@de borrar este elemento`)) {
        taskItem.remove();
        updateLocalStorage();
    }
}

function editTask(taskItem) {
    const newTask = prompt(`Edita la tarea: `, taskItem.firstChild.textContent)
    if (newTask !== null) {
        taskItem.firstChild.textContent = newTask;
        updateLocalStorage();
    }
}

//LOCAL STORAGE

function storeTaskInLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || `[]`)

    tasks.push(task);
    localStorage.setItem(`tasks`, JSON.stringify(tasks))
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem(`tasks`) || `[]`);
    tasks.forEach((task) => {
        taskList.appendChild(createTaskElement(task))
    })
}

function updateLocalStorage() {
    const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent);
    //console.log(tasks);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//DARK THEME

const themeToggleButton = document.getElementById("toggle-theme-btn");

const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const theme = document.body.classList.contains("dark-theme")
        ? "dark"
        : "light";
    localStorage.setItem("theme", theme);
});

if (currentTheme === "dark") {
    document.body.classList.add("dark-theme");
}