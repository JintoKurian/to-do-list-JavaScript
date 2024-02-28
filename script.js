const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');



addButton.addEventListener("click", addTask);

function addTask(){
    const tasktext =taskInput.value.trim();

    if(tasktext !== ""){
        const li=document.createElement("li");
        li.className = "task-item";

        li.innerHTML=`
        <span class="task-text">${tasktext}</span>
        <button class="editButton"><i class="fa-solid fa-pen text-light"></i></button>
        <button class="deleteButton"><i class="fa-solid fa-trash text-light"></i></i></button>
        `;
        
        taskList.appendChild(li);
        taskInput.value="";

        const editButton = li.querySelector(".editButton");
        const deleteButton = li.querySelector(".deleteButton");

        editButton.addEventListener("click", ()=> editTask(li));
        deleteButton.addEventListener("click", ()=>deleteTask(li));
    }

    function editTask(taskItem){
        const taskTextElement = taskItem.querySelector(".task-text");
        const newTaskText = prompt("Edit the task:",taskTextElement.textContent);
        if(newTaskText !== null){
            taskTextElement.textContent = newTaskText;
        }
    }

    function deleteTask(taskItem){
        taskList.removeChild(taskItem);
    }

    
}