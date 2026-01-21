// button
const getStartedButton = document.getElementById("getStarted_button");
const cancelButton = document.getElementById("cancel_button");
const submitButton = document.getElementById("submit_button")
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
} )
cancelButton.addEventListener("click", () => {
    formSection.classList.add("hidden");
})

// form submit
todoForm.addEventListener("submit", function(event){
    event.preventDefault();

    const task = taskInput.value;
    const date = dateInput.value;
    const status = statusSelect.value;

    console.log(task, date, status);
})