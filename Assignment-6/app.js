
//ASSIGNMENT #06 : MATH EXPRESSIONS
//Q#01:
// Take a number in a variable
var a = 10;
// Perform the arithmetic operations and display the results
document.write("RESULT:");
document.write("<br>The value of a is: " + a + "<br>");
document.write("..............................................................................................");
document.write("<br>The value of ++a is: " + (++a));
document.write("<br>Now the value of a is: " + a + "<br>");
document.write("<br>The value of a++ is: " + (a++));
document.write("<br>Now the value of a is: " + a + "<br>");
document.write("<br>The value of --a is: " + (--a));
document.write("<br>Now the value of a is: " + a + "<br>");
document.write("<br>The value of a-- is: " + (a--));
document.write("<br>Now the value of a is: " + a + "<br>" + "<br>");

//Q#02:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<h2>OUTPUT IN VARIABLES</h2>" + "<br>");
document.write("The value of a is: " + a + "<br>");
document.write("The value of b is: " + b + "<br>");
document.write("The result is: " + result + "<br>");

//Q#03
document.write("<h2>GREETINGS</h2>" + "<br>");
// Prompt the user for their name
var Name = prompt("Enter your name:");

// Greet the user
var greeting = "Salaam " + Name + "! Welcome To My Website!";
document.write(greeting);

//Q#05
// Prompt the user for a number
var number = prompt("Enter a number:");

// Check if the user entered a number or left it empty
if (number === null || number === "") {
    number = 5; // Set the default number to 5
}

// Display the multiplication table
document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    var result = number * i;
    document.write(number + " x " + i + " = " + result + "<br>");
}

//Q#06

// Step a: Take three subjects' names from the user
var subject1 = prompt("Enter the name of Subject 1:");
var subject2 = prompt("Enter the name of Subject 2:");
var subject3 = prompt("Enter the name of Subject 3:");

// Step b: Total marks for each subject is 100
var totalMarks = 100;

// Step c: Take obtained marks for the first subject from the user
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// Step d: Take obtained marks for the remaining two subjects from the user
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Step e: Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table
document.write("<h2>Subject Marks Calculation</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + totalObtainedMarks + "</strong></td></tr>");
document.write("<tr><td><strong>Percentage</strong></td><td></td><td><strong>" + percentage.toFixed(2) + "%</strong></td></tr>");
document.write("</table>");

