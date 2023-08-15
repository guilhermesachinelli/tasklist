class Task{
    constructor(id, tittle, status){
        this.id = id;
        this.tittle = tittle
        this.status = status
    }
}
class TaskList{
    constructor(){
        this.tasks = [];
    }
    addTask(task){
        this.tasks.push(task)
    }
}
function randonId(){
    return Math.floor(Math.random()* 9999);
}
const taskList = new TaskList();
function createTask(){
        let tittle = document.getElementById("new-task")
        let qqNome = new Task(randonId(), tittle, false)
        TaskList.addTask(qqNome);
        document.getElementById("new-task").value = "";
}