let todos = {

  /* TODO LIST
  -------------------------------*/
  todoList : [
    {
      text: "Go shopping",
      completed: false
    },
    {
      text: "Buy tobacco",
      completed: false
    },
    {
      text: "Do this",
      completed: false
    },
    {
      text: "Do that",
      completed: false
    },
  ],

  // DISPLAY TODOS
  // -------------
  displayTodos : function () { //in an object, the function key is the function name
    console.log (todos.todoList);
    print (todos.todoList);
  },

  // ADD TODOS
  // --------------
  addTodo: function (newText, newCompleted = false) {
    // this.todoList.push(text);
    
   
      this.todoList.push({
        text: newText,
        completed:newCompleted,
      });
    
    },

    displayTodos()
  };

 

  // CHANGE TODOS
  // ----------------
  changeTodos : function (index, newText) {
    this.todoList[index] = newText;
    // todoList.splice (index, 1, newText) //other method
    this.displayTodos();
  };

  // DELETE TODOS
  // ----------------
  deleteTodo : function (index, howMany = 1) { //1 is the default value in case user didnt provide
    this.todoList.splice (index, howMany);
    this.displayTodos();
  };

}

print(todoList)

// console.log (todos.todoList[0].text);
// console.log (todos.todoList[0].completed);












