/* LOOPS
------------------------------------*/

// let start = 10;
// let max = 100;

// // classic loop:
// // 1st part: inistialization
// // 2nd part: condition - when you want to stop the loop
// // 3rd part: incrementation - the value we want to move
// for( let i = 0; i <= max; i++ ) {
//   // print(i);
// }

// incrementation is adding a number to the current number, in the example we use +=1, but the right way is to do ++, decrementation is --



// // 2nd EXAMPLE
// // ------------
// let names = ["James", "Julia", "Edith"];
// // print(names.length); (this is to show how its counted)
// for(let i = 0; i <= names.length; i++) {
//   print("name: " + names[i]);
// };

// CHALLENGES
// ------------

// 1. show the numbers between 20 and 30
// for(let i = 20; i <= 30; i++) {
//   print(i);
// };


// 2. given this array, display the name of the todo and the completed status
let todos = [
  {
    text: "Learn JS",
    completed: true
  },
  {
    text: "Learn PHP",
    completed: true
  },
  {
    text: "Learn Python",
    completed: false
  },
];

for(let i = 0; i < todos.length ; i++) {
  
  let text = todos[i].text;
  let completed = todos[i].completed;

  // the short way
  // let displayStatus = (completed === true) ? "done!" : "Todo...";

  // the long way
  if(completed === true) {
    displayStatus = "Todo...";
  } else {displayStatus = "Done!"}
  
  let output = text + ": " + displayStatus;

  print(output);
};