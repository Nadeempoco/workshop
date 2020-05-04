// practice 29 april week 4 day 2
//----------------------------------


let myArray1 = [

	["Learn CSS","2020.04.30",true],
	["Learn JS","2020.05.30",true],
	["Learn Python","2020.06.30",true],

];





let myArray2 = [

	{
		text:					"Learn CSS",
		deadline:			"2020.04.30",
		completed:		true
	},

	{
		text:					"Learn JS",
		deadline:			"2020.05.30",
		completed:		false
	},

	{
		text:					"Learn Python",
		deadline:			"2020.06.30",
		completed:		false
	},

];


// changing a key in the array
// myArray2[1].completed = true;

// deleting an item in the array
// myArray2.splice(1, 1);

// adding an object to the list
// myArray2.push(
// 	{
// 	text:					"Learn something new",
// 	deadline:			"2020.06.30",
// 	completed:		false
// 	},
// );



// CREATING FUNCTIONS INSTEAD
// --------------------------

// adding an object to the list by using a function
function addItem (item) {

	myArray2.push(item)

};

addItem(
	{
		text:					"Learn something new",
		deadline:			"2020.06.30",
		completed:		false
	},
)


// adding an object to the list by using a function another aproach - here you enter the values only, and false is a default value if nothing is enterd
function addItems (newText, newDeadline, newCompleted = false) {

	myArray2.push({
		text: newText,
		deadline:newDeadline,
		completed: newCompleted,
	})

};

addItems("Basic Language", "2020.10.30",);


// deleting an item in the array by using a function
function deleteItem (index, deleteN = 1) {

	myArray2.splice(index, deleteN);
	
};

// deleting only the specifeid number of items afetr the specifeid index
deleteItem(0, 1)
// deleting everything after the specified index:
// deleteItem(0, myArray2.length)





// changing a key in the array using a function

function changeKeyValue (index, key, value) {

	// this is wrong 	myArray2[index].key = value.
	// its important to use the square bracket here insted of the dot notation .key, as the system will be looking for a variable called key wich doesnt exist. insted we call the index that the key we want to change exists.
	myArray2[index][key] = value;

};

changeKeyValue(1, "text", "Leran many new languages");
changeKeyValue(1, "completed", true);

print(myArray2)
