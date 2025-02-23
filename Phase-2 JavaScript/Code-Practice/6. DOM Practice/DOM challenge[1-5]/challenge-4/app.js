/**
 * Write your challenge solution here
 */

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
let countTask = 0;
let completedCount = 0;

addButton.addEventListener("click", function(){
    const emptyList = document.querySelector(".empty-list");
    if(emptyList){
        emptyList.remove();
    }

    const completeCheckBox = document.createElement("input");
    completeCheckBox.type = "checkbox";

    const li = document.createElement("li");
    li.className = "task-item";
    li.innerText = taskInput.value ;
    li.prepend(completeCheckBox);

    completeCheckBox.addEventListener("change", function(){ 
        if (completeCheckBox.checked){
            li.style.textDecorationLine = "line-through"
            completedCount++;
        } else{
            li.style.textDecorationLine = "none"
            completedCount--;
        }
        document.getElementById("completedTasks").innerText = `Completed: ${completedCount}`;

    });

    taskList.appendChild(li);
    taskInput.value=''

    countTask++;
    document.getElementById("totalTasks").innerText = `Total tasks: ${countTask}`;
})