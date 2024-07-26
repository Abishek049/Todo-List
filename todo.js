let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [
  {
    text: "Learn HTML",
    uniqueNo: 1
  },
  {
    text: "Learn CSS",
    uniqueNo: 2
  },
  {
    text: "Learn JavaScript",
    uniqueNo: 3
  }
];
let count = todoList.length;
function checkstatus(checboxid,labelid){
    let checkelement = document.getElementById(checboxid);
    let l = document.getElementById(labelid);
    if(checkelement.checked === true){
        l.classList.add("checklabel");
    } else{
        l.classList.remove("checklabel");
    }
}
function deletetodo(newtodo){
    let d = document.getElementById(newtodo);
    todoItemsContainer.removeChild(d);
}

function createAndAppendTodo(todo) {
    let checboxid = "checkbox"+todo.uniqueNo;
    let labelid = "label"+todo.uniqueNo;
    let newtodo = "todo"+todo.uniqueNo;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = newtodo;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checboxid;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function(){
    checkstatus(checboxid,labelid);
  };
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checboxid);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id = labelid;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function(){
    deletetodo(newtodo);
  };
  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function onaddtodo(){
    let userinput = document.getElementById("todoUserInput");
    let userinputvalue = userinput.value;
    let newcount = count + 1;
    if(userinputvalue === ""){
        alert("Enter Valid Input.....!");
        return;
    }
    let addnewtodo = {
        text: userinputvalue,
        uniqueNo: newcount
    }
    createAndAppendTodo(addnewtodo);
    userinput.value = "";
}

let addtodobutton = document.getElementById("addtodo");
addtodobutton.onclick = function(){
    onaddtodo();
};