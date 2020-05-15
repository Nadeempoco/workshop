let todos = {

  /* TODO LIST
  -------------------------------*/
  todoList : [
    "Go shopping",
    "Buy tobacco",
    "Do this",
    "Do that"
  ],

  // DISPLAY TODOS
  // -------------
  displayTodos : function () { //in an object, the function key is the function name
    console.log (todos.todoList);
  },

  // ADD TODOS
  // --------------
  addTodo: function (text) {
    this.todoList.push(text);
    this.displayTodos();
  },

  // CHANGE TODOS
  // ----------------
  changeTodo : function (index, newText) {
    this.todoList[index] = newText;
    // todoList.splice (index, 1, newText) //other method
    this.displayTodos();
  },

  // DELETE TODOS
  // ----------------
  deleteTodo : function (index, howMany = 1) { //1 is the default value in case user didnt provide
    this.todoList.splice (index, howMany);
    this.displayTodos();
  },

}

todos.displayTodos();
todos.addTodo("hello");
todos.changeTodo(1, "new");
todos.deleteTodo(2);









// //ADD EN ELEMENT TO THE ARRAY
// todoList.push("Do also that (it's important!)");
// console.log(todoList);






// addTodo("my new to do");



// changeTodo(1, "my changed text");



// deleteTodo(2, 2); //if i dont put a second value it will be 1 by default



