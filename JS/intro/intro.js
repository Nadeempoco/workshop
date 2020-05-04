

// GREETING APP
// --------------

// function message(greeting, name) {

//   return greeting + " " + name + "!";
// };

// console.log (message("Hello", "Nadeem"));



// // CONVERT MINUTES INTO SECONDS APP
// // --------------------------------

// function calculate (minutes) {

// //   return minutes + " minutes is " + (minutes * 60) + " Seconds";

// // }

// // let userInput = prompt("Enter the number of minutes");
// // console.log (calculate(userInput))



// // second version - need to fix the bug

// function calculate () {

//   let userInput = parseInt(prompt("Enter the number of minutes"));
//   return userInput + " minutes is " + (userInput * 60) + " Seconds";

// }


// console.log (calculate())




/* OBJECTS
----------------------- */
//  name, gender, age, country

let person = {
  name: "Bob Geldof",
  gender: "man",
  age: 68,
  country: "UK"
};

// console.log (person);
// console.log (person["name"]); //choose specific item
// console.log (person.name); //choose specific item (dot notation)

let persons = {

  bob: {
    "name": "Bob Geldof", // quotation marks is used in JSON files, it also work in JS
    "gender": "man",
    "age": 68,
    "country": "UK"
  },

  mark: {
    name: "Mark Geldof",
    gender: "man",
    age: 68,
    country: "UK"
  },

  hank: {
    name: "Mark Geldof",
    gender: "man",
    age: 68,
    country: "UK"
  },

};

console.log (persons.mark.name); // calling the name of mark
