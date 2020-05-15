// →→→ HELPER FUNCTION → TARGET ANY SELECTOR
// this one belwo looks like Jquery (create a function called $ to replace the whole document querydelector thing)
function $(selector) {
return document.querySelector(selector);
};

function $$(selector) {
  return document.querySelectorAll(selector);
}; //a function to target many elements

function make(selector) {
  return document.createElement(selector);
}; //a function to make a new element

// →→→ HELPER FUNCTION → CREATE ANY ELEMENT



// // the challange
// const div1 = make('div');
// const div2 = make('div');
// div1.setAttribute('id', 'admin-msg');
// div1.setAttribute('class', 'message');
// div2.setAttribute('class', 'msg-content');
// div2.innerHTML = 'some text here'

// div1.prepend(div2);
// $('body').append(div1);





/* CREATE ADMIN MESSAGE --------------------------------------*/ 
let div1 = make('div'); 
let div2 = make('div'); 
div1.setAttribute('id', 'admin-msg'); 
div1.setAttribute('class', 'message'); 
div2.setAttribute('class', 'msg-content'); 
div2.innerHTML = "Some admin text."; 
div1.prepend(div2);
// $('body').append(div1);


// EVENTS
let count = 0;

// at least two paramiters, first the event, then the condistion, btn1, or document is the target elemnt
(btn1).addEventListener('click', function() {
  
  count++;
  $('#msg').innerHTML += "I just clicked ";
  $('#p1').innerHTML = count;
}); //when i click, it will att a text to the element with ID #msg

// let counter = setInterval(function() {
//   count++
//   document.querySelector('msg').innerHTML = count;
// }, 1000);