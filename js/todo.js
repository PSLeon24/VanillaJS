const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODO_KEY = "todos";

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    //localStorage.setItem(TODO_KEY, todos);
    toDoInput.value = "";
    paintToDo(newTodo);
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
    //console.log(`I will paint ${newTodo}`);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
