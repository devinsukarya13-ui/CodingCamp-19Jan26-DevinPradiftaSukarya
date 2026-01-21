// array untuk table
const todos = [];
// button
const getStartedButton = document.getElementById("getStarted_button");
const cancelButton = document.getElementById("cancel_button");
// section
const formSection = document.getElementById("form_section");
// form & inputs
const todoForm = document.getElementById("todo_form");
const taskInput = document.getElementById("input_task");
const dateInput = document.getElementById("input_date");
const statusSelect = document.getElementById("status_select");
// table body
const todoBody = document.getElementById("todo_body");



// form hidden
getStartedButton.addEventListener("click", () => {
    formSection.classList.remove("hidden");
});
cancelButton.addEventListener("click", () => {
    formSection.classList.add("hidden");
});

// form submit
todoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const task = taskInput.value;
    const date = dateInput.value;
    const status = statusSelect.value;

    todos.push({
        task,
        date,
        status
    });

    todoBody.innerHTML = "";

    todos.forEach(function(item, index) {
        const row = document.createElement("tr");
        row.classList.add("border-t", "border-slate-700");

        row.innerHTML = `
            <td class="text-left px-3 py-2">${index + 1}</td>
            <td class="text-left px-3 py-2">${item.task}</td>
            <td class="text-left px-3 py-2">${item.date}</td>
            <td class="text-left px-3 py-2">${item.status}</td>
        `;

        todoBody.appendChild(row);
});

});