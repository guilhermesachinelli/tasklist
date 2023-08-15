let tittle = document.getElementById("new-task").value;
class Task {
    constructor(id, tittle, status) {
        this.id = id;
        this.tittle = tittle
        this.status = status
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task)
    }
    completTask(){
        taskList.tasks.forEach((task, tasks) => {
            if(tasks != true){
                this[task.status] = true
                return document.getElementById("completTask").classList.add("green")
            }else{
                this[task.status] = false
            }
        });
    }
    //criar um metodo que alterar o valor do obj e tbm a cor
}
function randonId() {
    return Math.floor(Math.random() * 9999);
}
const taskList = new TaskList();

function createTask() {
    let title = document.getElementById("new-task").value;
    const task = new Task(randonId(), title, false)
    taskList.addTask(task);
    document.getElementById("new-task").value = "";
    showTask();
    completTask;
}
function showTask() {
    let showContent = '';
    taskList.tasks.forEach((task, index) => {
        showContent += `
        <div id="postlist">
            <div class="postContainner">
                <p>${task.tittle}</p>
                <button id="completTask" class="completbutton" onclick="completTask(${index})"><i class="fa-solid fa-check"></i></button>
                <button id="editTask" class="editbutton" onclick="editTask(${index})" class=""><i class="fa-solid fa-pen"></i></button>
                <button id="removeTask" class="removebutton" onclick="removeTask(${index})"><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
        `;
    }
    )
    document.getElementById("postContainner").innerHTML = showContent
}
function editTask(index) {
    const edittask = taskList.tasks[index]
}
function removeTask(index) {
    taskList.tasks.splice(index, 1);
    showTask();
}
function completTask() {
    taskList.completTask()
}
