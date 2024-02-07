function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);

        var deleteButton = document.createElement("span");
        deleteButton.className = "delete";
        deleteButton.innerHTML = "&times;";
        deleteButton.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

