
//ASSIGNMENT # 03 :"Variables For Numbers"
//Q#01
var age = "I'm 18 years old"
alert(age);
//Q#02
// Declare and initialize the variable
var visitCount = 0;
// Check if the visit count is stored in the browser's local storage
if (localStorage.getItem('visitCount')) {
  visitCount = parseInt(localStorage.getItem('visitCount'));
}
// Increment the visit count
visitCount++;
// Store the updated visit count in the local storage
localStorage.setItem('visitCount', visitCount);
// Display the number of visits in an alert box
alert("You have visited this site " + visitCount + " times.");

//Q#03
//Declare a birth year
var BirthYear = 2004;
document.write("My Birth Year Is " + BirthYear);

//Q# 04
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = "5";

//Displaying the message in the browser
document.write(visitorName + " ordered " + quantity + " " + productTitle + " (s) XYZ clothing store. ");

