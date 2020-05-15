// THE DOM
// HOW TO MANUPULATE HTML WITH JS
// DOM = DOCUMENT OBJECT MODEL
// --------------------------------------


// lets grab the head title form our HTML document
const title = document.querySelector('title');

console.log(title);
console.log(title.innerHTML);

// const h1 = document.querySelector('h1').innerHTML;
// console.log(h1);

const h1 = document.querySelector('h1');
h1.innerHTML = "My new H1 Hey Jude!";
h1.classList.add('new-class');
h1.classList.remove('remove-class');
h1.setAttribute('id', 'main-header');
console.log(h1.getAttribute('class'));
console.log(h1.getAttribute('id'));
h1.removeAttribute('id')

const myConsole = document.getElementById('my-console')
console.log(myConsole);


myConsole.innerHTML = "print(hello)";
console.log(myConsole);




console.log(h1.innerHTML);
