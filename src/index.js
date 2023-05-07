const form = document.querySelector("form");
const taskListEl = document.getElementById("taskList");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTaskInput = document.getElementById("newTask");
    const newTaskText = newTaskInput.value.trim();
    if (newTaskText.length>0) {
        const newTask = document.createElement("li");
        const newTaskTextSpan = document.createElement("span");
        const newTaskDeleteButton = document.createElement("button");
        const newTaskCheckbox = document.createElement("input");

        newTaskDeleteButton.textContent = "Delete";
        newTaskDeleteButton.classList.add("deleteButton");
        newTaskCheckbox.type = "checkbox";
        newTaskTextSpan.textContent = newTaskText;

        newTask.appendChild(newTaskCheckbox);
        newTask.appendChild(newTaskTextSpan);
        newTask.appendChild(newTaskDeleteButton);
        taskList.appendChild(newTask);

        newTaskInput.value = "";
    }
});
taskListEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteButton")) {
    const listItemEl = e.target.parentNode;
    listItemEl.parentNode.removeChild(listItemEl);
  }
});
  taskList.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const listItem = e.target.parentNode;
      if (e.target.checked) {
        listItem.classList.add("completed");
      } else {
        listItem.classList.remove("completed");
      }
    }
  });