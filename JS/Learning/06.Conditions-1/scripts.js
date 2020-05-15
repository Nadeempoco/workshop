/* CONDITIONS
------------------------------------*/


// let num = 5;
// let num2 = 20;

// if(num > 0) {
//   print("TRUE!");
// }
// else {
//   print("false!")
// }


// // double check. when or is used; if any of the conditions true the result is true.

// if (num > 5 || num2 < 30) {
//   print("double check OR", "true");
// }


// let num3 = 3 - 6 + 1; //-4
// let num4 = (3 - 3) * (3 + 1); //0

//CHALLANGE
// function message (hour) {

//   if (hour < 8) {
//     print ("what are you doing that early?!")
//   };

//   if (hour == 8 || hour <= 12) {
//     print ("good morining")
//   };

//   if (hour > 12 && hour < 17) {
//     print ("good afternoon")
//   }; 

//   if (hour >= 17 || hour == 21) {
//     print ("good evening")
//   }; 

//   if (hour > 21) {
//     print ("good night")
//   };

  
// }

// hour = prompt ("what is the hour?");

// message(hour);


// week 4, day 4-5, challange 1
// well i went far... this is not wat is required!
// function lessThanOrEqualToZeroV2(num) {
// 	if (num < 0) {
//     print("this is a negative number");
//   } else {
//     print("this is a positive number")
//   };
// }

// lessThanOrEqualToZeroV2(prompt("please enter a number"));


// week 4, day 4-5, challange 1
function lessThanOrEqualToZero(num) {
	if (num <= 0) {
    lessOrEqual = '"true"'
  } else {
    lessOrEqual = '"false"'
  };
  print(num + " is less or equal Zero ➞ " + lessOrEqual);
}

lessThanOrEqualToZero(5);
lessThanOrEqualToZero(0);
lessThanOrEqualToZero(-2);


// week 4, day 4-5, challange 2
function isEvenOrOdd(num2) {
	if (num2 % 2 == 0) {
    EvenOrOdd = "even"
  } else {
    EvenOrOdd = "odd"
  };
  print(num2 + " is an " + EvenOrOdd + " number");
};

isEvenOrOdd(3);
isEvenOrOdd(146);
isEvenOrOdd(19);

// week 4, day 4-5, challange 3
function isPlural(word) {
	if (word.slice(-1)=="s") {
    pluralOrSingular = "Plural"
  } else {
    pluralOrSingular = "Singular"
  };
  print(word + " is " + pluralOrSingular);
};

isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");


// week 4, day 2, challange 1
function areaOfSurface (lngth, wdth) {
  let surface = lngth * wdth;
  print("The surface is " + surface + " m2");
};

areaOfSurface(11, 20);
areaOfSurface(258, 333);


// week 4, day 2, challange 2
function remainder(x, y) {
  let remainder = x % y;
  print("The remainder of dividing " + x + " by " + y + " is " + remainder);
};

remainder(1, 3);
remainder(3, 4);
remainder(-9, 45);
remainder(5, 5);

// week 4, day 2, challange 3
function frames(minutes, fps) {
  let frames = minutes * fps * 60;
  print(minutes + " minutes at " + fps + "fps is " + frames + " frames");
};

frames(1, 1);
frames(10, 1);
frames(10, 25);


// week 4, day 2, challange 1 Objects
function cityFacts(city) {
  cityOutput = city.name + " has a population of " + city.population + " and is located in " + city.continent;
  print(cityOutput);
};

cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe",
});
cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
})

// week 4, day 2, challange 2 Objects
function profit(costPrice, sellPrice, inventory) {
  let totalSales = inventory * sellPrice;
  let totalCost = inventory * costPrice;
  let profit = totalSales - totalCost;
  print("Your Profit/Loss is " + profit)
};
profit(32.67, 45.00, 1200);
profit(225.89, 550.00, 100);
profit(2.77, 7.95, 8500);