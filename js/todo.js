const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODO_KEY = "todos";


function saveToDos(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id)); // li의 id와 변수의 id가 다를 때 true -> 클릭한 li.id와 todo.id가 같은 요소는 false이므로 새로 형성할 배열에서 제외  
    saveToDos(); 
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = " ❌ ";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // submit(enter) 할 때마다 해당 입력값을 빈 칸으로 초기화
    const newTodoObj = {
        id: Date.now(), // number 타입 
        text:newTodo,
    }
    toDos.push(newTodoObj); // toDos arry에 vlaue 저장
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY);

if(savedToDos !== null){
    // localstorage에 저장된 todo가 있을 경우
    const parsedToDos = JSON.parse(savedToDos); 
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}