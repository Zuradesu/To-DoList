document.querySelector("button").addEventListener("click", addTask);
document.querySelector("#input-box").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let inputBox = document.querySelector("#input-box");
    let taskText = inputBox.value.trim();

    if (taskText !== "") {
        let ul = document.querySelector("#list-bg");

        let li = document.createElement("li");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        checkbox.addEventListener("change", function() {
            if (this.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        let span = document.createElement("span");
        span.textContent = taskText;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);

        ul.appendChild(li);

        inputBox.value = "";
    }
}
