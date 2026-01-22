// array untuk table
const todos = [];
// variable filter
let currentFilter = "all";
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
const actionHeader = document.getElementById("action_header");
// table body
const todoBody = document.getElementById("todo_body");
// filter
const filterToggle = document.getElementById("filter_toggle");
const filterMenu = document.getElementById("filter_menu");



// form hidden
getStartedButton.addEventListener("click", () => {
    formSection.classList.remove("hidden");
});
cancelButton.addEventListener("click", () => {
    formSection.classList.add("hidden");
});

// filter
filterToggle.addEventListener("click", function (event){
    event.stopPropagation();
    filterMenu.classList.toggle("hidden");
});
document.addEventListener("click", function (event){
    filterMenu.classList.add("hidden");
});
filterMenu.addEventListener("click", function (event){
    const status = event.target.dataset.status;
    if (!status) return;
    currentFilter = status;
    renderTodos();
    filterMenu.classList.add("hidden");
});

// form submit
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = taskInput.value;
    const date = dateInput.value;
    const status = statusSelect.value;

    if (task === "" || date === "") {
        alert("TO DO LIST AND DATE CANT BE EMPTY")
        return;
    };

    todos.push({
        id: Date.now(),
        task,
        date,
        status
    });
    renderTodos();
});

function renderTodos() {
    todoBody.innerHTML = "";

    let filteredTodos = todos;
    if (currentFilter !== "all"){
        filteredTodos = todos.filter(function (item){
            return item.status === currentFilter;
        });
    };

    if (todos.length > 0 ) {
        actionHeader.classList.remove("hidden");
    } else {
        actionHeader.classList.add("hidden");
    };

    filteredTodos.forEach(function (item, index){
        const row = document.createElement("tr");
        row.classList.add("border-t", "border-slate-700");

        row.innerHTML = `
            <td class="text-left px-3 py-2">${index + 1}</td>
            <td class="text-left px-3 py-2">${item.task}</td>
            <td class="text-left px-3 py-2">${item.date}</td>
            <td class="text-left px-3 py-2">${item.status}</td>
            <td class="text-left px-3 py-2">
                <button class="delete-btn text-red-500 hover:underline">
                    Delete
                </button>
            </td>
        `;

        todoBody.appendChild(row);

        const deleteButton = row.querySelector(".delete-btn");
        deleteButton.addEventListener("click", function () {
            const index = todos.findIndex(function (todo) {
                return todo.id === item.id;
            });

            if (index !== -1) {
                todos.splice(index, 1);
                renderTodos();
            };
        });
    });
};



