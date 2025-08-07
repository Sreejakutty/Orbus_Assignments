let taskListCount = 0
function addTask(){
    const inputTask = document.getElementById('newtask')
    const newTask = inputTask.value.trim();
    if (newTask !== "") {
        inputTask.value = ""
        taskListCount ++
        const taskData = {taskName: newTask, taskId: taskListCount}
        addTaskData(taskData)
    }
}

function addTaskData(data){
    const taskList = document.getElementById('task-list');

    const card = document.createElement('div');
    card.className = 'task-card';

    const number = document.createElement('div');
    number.className = 'task-number';
    number.innerText = data.taskId;
    
    const info = document.createElement('div');
    info.className = 'task-info';

    const title = document.createElement('h4');
    title.innerText = data.taskName;
    info.appendChild(title);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove';
    removeBtn.innerText = 'Remove';

    removeBtn.onclick = function () {
        taskList.removeChild(card);
        updateTaskCount();
    }

    const doneBtn = document.createElement('button');
    doneBtn.type = 'button';
    doneBtn.className = 'done';
    doneBtn.innerText = 'Done';

    doneBtn.onclick = function () {
        card.classList.add("completed");
        doneBtn.disabled = true;
        updateTaskCount();
    }

    actions.appendChild(removeBtn);
    actions.appendChild(doneBtn);

    card.appendChild(number);
    card.appendChild(info);
    card.appendChild(actions);

    taskList.appendChild(card);

    updateTaskCount();
}

function updateTaskCount() {
    const allTasks =  document.querySelectorAll("#task-list .task-card").length;
    const completedTasks = document.querySelectorAll("#task-list .task-card.completed").length;
    document.getElementById("task-count").innerText = `${allTasks} tasks • ${completedTasks} completed`;
}