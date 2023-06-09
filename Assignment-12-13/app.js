

//ASSSIGNMENT#12-13 :IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS
//Q#01

// Prompt the user to enter a character
var char = prompt("Enter a character:");

// Get the ASCII code of the character
var charCode = char.charCodeAt(0);

// Check if the character is a number
if (charCode >= 48 && charCode <= 57) {
  document.write("The input is a number." + "<br>");
}
// Check if the character is an uppercase letter
else if (charCode >= 65 && charCode <= 90) {
  document.write("The input is an uppercase letter." + "<br>");
}
// Check if the character is a lowercase letter
else if (charCode >= 97 && charCode <= 122) {
  document.write("The input is a lowercase letter." + "<br>");
}
// If none of the above conditions match, it is not a number or letter
else {
  document.write("The input is not a number or letter." + "<br>" );
}

//Q#02
// Prompt the user to enter the first integer
var firstNumber = +(prompt("Enter the first integer:"));

// Prompt the user to enter the second integer
var secondNumber = +(prompt("Enter the second integer:"));

// Check if the two integers are equal
if (firstNumber === secondNumber) {
  document.write("The two integers are equal.");
}
// If the first number is larger than the second number
else if (firstNumber > secondNumber) {
  document.write("The larger number is: " + firstNumber);
}
// If the second number is larger than the first number
else {
  document.write("The larger number is: " + secondNumber);
}

//Q#03
// Prompt the user to enter a number
var number = +(prompt("Enter a number:"));

// Check if the number is positive
if (number > 0) {
  document.write("The number is positive.");
}
// Check if the number is negative
else if (number < 0) {
  document.write("The number is negative.");
}
// If the number is neither positive nor negative, it must be zero
else {
  document.write("The number is zero.");
}

//Q#04
// Prompt the user to enter a character
var character = prompt("Enter a character:");

// Convert the character to lowercase for case-insensitive comparison
character = character.toLowerCase();

// Check if the character is a vowel
if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
  document.write("The character is a vowel.");
} else {
  document.write("The character is not a vowel.");
}


//Q#05
// Store the correct password in a variable
var correctPassword = "SUNDUS123";

// Prompt the user to enter their password
var enteredPassword = prompt("Enter your password:");

// Check if the user has entered a password
if (enteredPassword === "") {
  // Display a message if no password is entered
  alert("Please enter your password");
} else if (enteredPassword === correctPassword) {
  // Display a message if the entered password matches the correct password
  alert("Correct! The password you entered matches the original password");
} else {
  // Display a message if the entered password is incorrect
  alert("Incorrect password");
}

//Q#06
var greeting;
var hour = 13;
if (hour <= 18) {
document.write(greeting = "Good day");
}else {
  document.write(greeting = "Good evening");
}

//Q#07
// Prompt the user to enter the time in 24-hour clock format
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

// Check the time and display the corresponding greeting
if (time >= 0000 && time < 1200) {
  document.write("Good morning");
} else if (time >= 1200 && time < 1700) {
  document.write("Good afternoon");
} else if (time >= 1700 && time < 2100) {
  document.write("Good evening");
} else if (time >= 2100 && time <= 2359) {
  document.write("Good night");
} else {
  document.write("Invalid time entered");
}
