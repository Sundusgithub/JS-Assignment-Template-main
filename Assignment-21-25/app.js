// //Assignment 21-25: STRING METHODS
// //QUESTION #01
// // Prompt the user for the first name
// var firstName = prompt("Enter your first name:");
// // Prompt the user for the last name
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// // Greet the user using their full name
// alert("Salaam, " + fullName + "! Welcome To Our Bakery.");

// //QUESTION #02
// // Prompt the user for their favorite mobile phone model
// var favoriteModel = prompt("Enter your favorite mobile phone model:");
// var inputLength = favoriteModel.length;
// // Display the favorite mobile phone model and its length in the browser
// document.write("My Favorite phone is: " + favoriteModel + "<br>");
// document.write("Length of string: " + inputLength + "<br>");


// //QUESTION #03
// // Word to search within
// var word = "Pakistani";
// // To Find the index of the letter 'n'
// var index = word.indexOf("n");
// // Display the result in the browser
// document.write("String: " + word + "<br>");
// document.write("Index of 'n' = " + index + "<br>");

// //QUESTION #04
// // Word to search within
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("String: " + word + "<br>");
// document.write("Last index of 'l' = " + lastIndex + "<br>");

// //QUESTION #05
// // Word to search within
// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at 3rd index: " + character + "<br>");

// //QUESTION #06
// // Word to search within
// var word = "Pakistani";
// var character = word.concat().charAt(3);
// document.write("String: " + word + "<br>");
// document.write("Character at 3rd index: " + character + "<br>");

// //QUESTION #07
// // Word to modify
// var City = "Hyderabad";
// // Replace "Hyder" with "Islam"
// var Afterdisplacement = City.replace("Hyder", "Islam");
// document.write("City: " +  City + "<br>");
// document.write("After displacement: " +  Afterdisplacement + "<br>");

// //QUESTION #08
// // Given string
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// // Replace all occurrences of "and" with "&"
// var modifiedMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("Modified message: " + modifiedMessage + "<br>");

// //QUESTION #09
// // String to convert
// var string = "472";
// // Convert the string to a number
// var num = Number(string);
// document.write("Value: " + string + " ; Type: " + typeof string + "<br>");
// document.write("Value: " + num + " ; Type: " + typeof num + "<br>");

// //QUESTION #10
// // Take user input
// var userInput = prompt("Enter Any Word:");

// // Convert input to uppercase
// var toUpperCase = userInput.toUpperCase();

// // Display the converted input in the browser
// document.write("User Input: " + userInput + "<br>");
// document.write("Upper Case: " + toUpperCase + "<br>");

// //QUESTION #11
// //To convert the user input in title case
// var userInput = prompt("Enter your input:");
// var firstChar = userInput.slice(0, 1);
//  var otherChars = userInput.slice(1);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var fullword = firstChar + otherChars;
//  document.write(" UserInput:" +userInput + "<br>" );
//  document.write( "TitleCase" +fullword + "<br>");

//  //QUESTION #12
//  // Variable with a number
// var num = 35.36;
// var Result = num.toString().replace(".", "");
// // Display the converted number in the browser
// document.write("Number: " + num + "<br>");
// document.write("Result: " + Result);

//  //QUESTION #13
// // Take user input for username
// var username = prompt("Enter your username:");
// var containsSpecialSymbol = false;
// for (var i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
//   if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//     containsSpecialSymbol = true;
//     break;
//   }
// }
// if (containsSpecialSymbol) {
//   username = alert("Please enter a valid username!");
// }
// document.write("Username: " + username);

// //QuESTION #14
// // Array of items
// var Arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter an item to search:");
// var searchItem = userInput.toLowerCase();
// var isFound = false;
// for (var i = 0; i < Arr.length; i++) {
//     var currentItem = Arr[i].toLowerCase();
//     if (currentItem === searchItem) {
//         isFound = true;
//         break;
//     }
// }
// // Prompt user whether the item is found or not
// if (isFound) {
//     alert("The item \"" + userInput + "\" is found in the list.");
// } else {
//     alert("The item \"" + userInput + "\" is not found in the list.");
// }

// //QuESTION #15
// var password = prompt("Enter a password:");
// // Check if password contains alphabets and numbers
// var Alphabets = false;
// var Numbers = false;
// for (var i = 0; i < password.length; i++) {
//     var charCode = password.charCodeAt(i);
//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//       Alphabets = true;
//     } else if (charCode >= 48 && charCode <= 57) {
//         Numbers = true;
//     }
// }
// // Check if password starts with a number
// var startsWithNumber = false;
// var firstCharCode = password.charCodeAt(0);
// if (firstCharCode >= 48 && firstCharCode <= 57) {
//     startsWithNumber = true;
// }
// var isAtLeast6Characters = password.length >= 6;
// // Check if password meets all the requirements
// if (!Alphabets || !Numbers || startsWithNumber || !isAtLeast6Characters) {
//     isValid = false;
// }
// // Prompt user to enter a valid password if it doesn't meet the requirements
// while (!isValid) {
//     password = prompt("Please enter a valid password:\n- It should contain alphabets and numbers\n- It should not start with a number\n- It must be at least 6 characters long");
//    Alphabets = false;
//    Numbers = false;
//     startsWithNumber = false;
//     isAtLeast6Characters = password.length >= 6;
//     for (var i = 0; i < password.length; i++) {
//         var charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             Alphabets = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             Numbers = true;
//         }
//     }
//     if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         startsWithNumber = true;
//     }
//     if (Alphabets && hasNumbers && !startsWithNumber && isAtLeast6Characters) {
//         isValid = true;
//     }
// }
// // Display the valid password
// alert("Valid password: " + password);


//QUESTION#16
var university = "University of Karachi";
var array = university.split("");
for (var i = 0; i < array.length; i++) {
  document.write(array[i] + "<br>");
}