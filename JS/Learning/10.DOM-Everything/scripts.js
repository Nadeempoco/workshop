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


// Target element → classic approach
let main = document.querySelector("main"); console.log


// Target element → awesome approach
let myVar1 = $("main"); console.log(myVar1);
// EXPLANATION FO THE ABOVE CODE: so it is basiclly creating a variable (call it whatever, here its myVar1), the variable has a function (here we called it $ --we created this function above earlier) to grab what is inside <main> element, and then show it on the console using console.log(myVar1)

// manage attributes
$('h1').setAttribute('id', 'main-title'); //setting a main-title id in <h1>
$('p').setAttribute('class', 'row'); //this will change first <p> because we didnt specify wich <p>!
$('#p4').removeAttribute('class') //remove the class from the #p4
$('html').setAttribute('lang', 'fr') //change the language attribute in the 

// manage class attribute
$('body').classList.add('new-class', 'another-new-class'); //adding two new classes to body
// $('html').remove




// →→→ CREATE ELEMENT [Classic approach]
const p1 = make('p'); //create a new <p> element, we called the variable p1
p1.setAttribute('calss', 'row'); //creating a class .row to p1
p1.innerHTML = "the text i want to add"; //adding text to the p1 element
main.append(p1); //adding p1 at the end of <main>
$('main').insertBefore(p1, $('p2')); // this will insert p1 before p2

//--------------------------------------------------------
const span = make('span'); //craete a variable called span, to create the span element
span.textContent = "This is the span content" //adding content to the span element
p1.prepend(span); //create a span element before p1


// the challange
const div1 = make('div');
const div2 = make('div');
div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');
div2.innerHTML = 'some text here'

div1.prepend(div2);
$('body').append(div1);





// →→→ ADD TEXT CONTENT



// →→→ ADD HTML CONTENT


// →→→ YOU CAN DO MORE WITH HTML CONTENT
// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind


// This will touch all of them
// let p = $$("p"); console.log(p)

// console.log ($$("p"));



// // something wrong here! it is supposed to be correct! check why later! fixed by modifying where the bracket ends! 
$$ ('p').forEach ( function(item) {
  item.style.color = "#199";
});

// →→→ DO STYLES
$('#p2').style.color = '#f00';
$('#p3').style.backgroundColor = '#ccc'; //convert CSS styles into camel style when usinf JS
$('#p4').style.cssText = 'background-color: #f03; color: #014'; //inside style text i can use the CSS styling codes normally



// →→→ INSERT, APPEND, PREPEND



