//ASSIGNMENT #17-20 :ARRAYS AND LOOP
//Q#01

// Declare and initialize an empty multidimensional array
var multiArray = [];

// Add arrays as elements to the multidimensional array
multiArray.push([]);
multiArray.push([]);
multiArray.push([]);

multiArray[0].push(1);
multiArray[0].push(2, 3);
multiArray[1].push(4, 5, 6);
multiArray[2].push(7);
document.write(multiArray + "<br>");

//Q#02
// Declare and initialize the multidimensional array representing the matrix
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

// Display the matrix
for (var i = 0; i < matrix.length; i++) {
  document.write("<br>" + matrix[i].join(' '));
}

//Q#03
// Print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
  document.write("<br>" + i + "<br>");
}

//Q#04
// Take input from the user for the table number and length
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

// Print the multiplication table
document.write("Multiplication Table of " + tableNumber + " (Length: " + tableLength + ")");
for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  document.write(tableNumber + " * " + i + " = " + result + "<br>");
}
//Q#05
// Array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Print the items of the array using a for loop
for (var i = 0; i < fruits.length; i++) {
  document.write("<br>" + fruits[i] + "<br>");
  document.write("<br>" + "Element At Index: " + i + ", Fruit: " + fruits[i] + "<br>")
}

//Q#06
// Counting: 1 to 15
var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
document.write("<br>" + "Counting: " + counting);

document.write("<br>");

// Reverse counting: 10 to 1
var Reversecounting = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
document.write("Reverse counting: " + Reversecounting);


document.write("<br>");

// Even numbers: 0 to 20
document.write("Even: ");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<br>");

// Odd numbers: 1 to 19
document.write("Odd: ");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<br>");

// Series: 2k to 20k
document.write("Series: ");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
document.write("<br>");

//Q#07
// Array of items
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Prompt the user for input
var userInput = prompt("Welcome to ABC bakery.What do you want to order sir/ma'am?");

// Convert the user input to lowercase for case-insensitive search
userInput = userInput.toLowerCase();

// Flag to check if the item is found
var found = false;

// Search the array for the user input
for (var i = 0; i < A.length; i++) {
  // Convert the current item to lowercase for case-insensitive search
  var currentItem = A[i].toLowerCase();

  // Check if the user input matches the current item
  if (currentItem === userInput) {
    found = true;
    break;
  }
}

// Display the search result to the user
if (found) {
  document.write("<br>" + "Yes! This item is available in our bakery." + "<br>");
} else {
  document.write("<br>" + "We are Sorry. This item is not available in our Bakery." + "<br>");
}

//Q#08
// Array of numbers
var A = [24, 53, 78, 91, 12];
// Initialize a variable to store the largest number
var largestNumber = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] > largestNumber) {
    largestNumber = A[i];
  }
}
// Display the array items and the largest number
document.write("Array Items:" + A + "<br>");
document.write("The largest number is: " + largestNumber + "<br>");

//Q#09
// Array of numbers
var A = [24, 53, 78, 91, 12];
// Initialize a variable to store the smallest number
var smallestNumber = A[0];
for (var i = 1; i < A.length; i++) {
  if (A[i] < smallestNumber) {
    smallestNumber = A[i];
  }
}
// Display the array items and the smallest number
document.write("Array items: " + A + "<br>");
document.write("The smallest number is: " + smallestNumber + "<br>");


//Q#10
for (var i = 1; i <= 100; i++) {
  // Check if the number is a multiple of 5
  if (i % 5 === 0) {
    document.write(i + ", ");
  }
}
