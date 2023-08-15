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
        taskList.tasks.forEach((task, index) => {
            if(task = index){
                this.status = true;
            }
        });
    }
    //criar um metodo que alterar o valor do obj e tbm a cor do css
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
    if (tittle === '') {
        return document.getElementById("taskEmpty").classList.remove("hidden")
    }
}
function showTask() {
    let showContent = '';
    taskList.tasks.forEach((task, index) => {
        showContent += `
        <div id="postlist">
            <div class="postContainner">
                <p>${task.tittle}</p>
                <button id="completTask" onclick="completTask(${index})"><i class="fa-solid fa-check"></i></button>
                <button id="editTask" onclick="editTask(${index})" class=""><i class="fa-solid fa-pen"></i></button>
                <button id="removeTask" onclick="removeTask(${index})"><i class="fa-solid fa-trash"></i></button>
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
function completTask(index) {
    const complet = taskList.tasks[index].tittle;
    if(complet == false){
        status : true;
    }
}