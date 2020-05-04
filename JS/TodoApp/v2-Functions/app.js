/* TODO LIST
-------------------------------*/
let todoList = [
  "Go shopping",
  "Buy tobacco",
  "Do this",
  "Do that"
];

// //ADD EN ELEMENT TO THE ARRAY
// todoList.push("Do also that (it's important!)");
// console.log(todoList);



// DISPLAY TODOS
// -------------
function displayTodos () {
  console.log (todoList);
}
displayTodos();

// ADD TODOS
// --------------
function addTodo (text) {
  todoList.push (text);
  displayTodos(); //add it to the end everytime to see the result
}
addTodo("my new to do");


// CHANGE TODOS
// ----------------
function changeTodo (index, newText) {
  todoList[index] = newText;
  // todoList.splice (index, 1, newText) //other method
  displayTodos(); //add it to the end everytime to see the result
}
changeTodo(1, "my changed text");


// DELETE TODOS
// ----------------
function deleteTodo (index, howMany = 1) { //1 is the default value in case user didnt provide
  todoList.splice (index, howMany);
  displayTodos(); //add it to the end everytime to see the result
}
deleteTodo(2, 2); //if i dont put a second value it will be 1 by default



