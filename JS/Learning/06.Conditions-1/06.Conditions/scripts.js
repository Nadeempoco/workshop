/* CONDITIONS
------------------------------------*/
let num = 5;
let num2 = 20;


//Comparison operators :
// > greater than
// < less than
// >= greater or equal to
// <= less or equal to
// == equal to
// === equal to and the same type
// != NOT equal to
// !== NOT equal and not the same type


// A SIMPLE CONDITION
if(num > 5) {
  show("Simple check:", "TRUE!");
}
else {
  show("Simple check:", "FALSE!");
}

// A STRICT EQUALITY CHECK CONDITION
if(num === 5) {
  show("Strict equality:", "TRUE!");
}
else {
  show("Strict equality:", "FALSE!");
}


// A DOUBLE CKECK WITH "OR" (logical operator)
// One of the conditions must be true
if(num > 5 || num2 < 30) {
  show("Double check with OR:", "TRUE");
}

// A DOUBLE CKECK WITH "AND" (logical operator)
// Both conditions must be true
if(num > 5 && num2 < 30) {
  show("Double check with AND:", "TRUE");
}


// USING NOT OPERATOR
if(num != "5") {
  show("not operator: TRUE!");
}

// COMPLEX CHECKS
            //FALSE                      //FALSE
if((num === 5 && num > 5) || (num2 == 20 && num2 > 20)) {
  show("complex cond: TRUE!");
}

let num3 = 3 - 6 + 1; //-4
let num4 = (3 - 3) * (2 + 1); //0


// CHALLENGE
function message(customHour = null) {


  //IF customHour === ?
  // customHour = null            // false
  // customHour = false           // false
  // customHour = ""              // false
  // customHour = "something"     // true
  // customHour = 3               // true


  //1. Initialize variables :
  let hour    = false; //
  let output  = "";    //empty string


  //2. IF "customHour" HAVE a value, use the value of "customHour"
  if(customHour) {
    hour = customHour;
  }

  //ELSE → "customHour" DO NOT have a value, use this :
  else {
    let date = new Date();
    hour = date.getHours(); //show(hour);
  }


  //3. CONDITIONS

  function message(hour) {

  if(hour < 8) {
    output = "What are you doing that early?";
  }
  if(hour >= 8 && hour < 12) {
    output = "Good morning!";
  }
  if(hour >= 12 && hour < 17) {
    output = "Good afternoon!";
  }
  if(hour >= 17 && hour < 21) {
    output = "Good evening!";
  }
  if(hour >= 21) {
    output = "Good night!";
  }


  //4. OUTPUT
  show(output, "Hour message");


}

// message(); //empty argument = function will use JS hour
// message(9); //with an argument, function will use this value
// message(12);
// message(15);
// message(18);
// message(21);



/* ELSE IF STATEMENT
------------------------------------*/
let numb = 15;
let output = "";

// We start with an if statement
if(numb > 15) {
  output = "FALSE 1";
}
else if(numb >= 15) {
  output = "TRUE 1";
}
else if(numb === "15") {
  output = "FALSE 2";
}
else if(numb === 15) {
  output = "TRUE 2";
}
else {
  output = "NOTHING IS TRUE MATE";
}

show(output);