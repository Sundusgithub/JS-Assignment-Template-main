


//ASSIGNMENT 05: MATH EXPRESSIONS 
//Q#01
document.write("<h2>Addition Of Two Numbers</h2>");
//addition of two numbers
var number = "18";
var number1 = "1000";
var popularNumber = number + number1;
document.write("The Sum Of " + number + " And " + number1 + " Is " + popularNumber + ".   " + " <br>")

//Q#02
document.write("<h2>MATHEMATIC CALCULATION</h2>");
//Subtraction of two numbers
var number2 = "823";
var number3 = "456";
var popularNumber1 = number2 - number3;
document.write("  The difference Of " + number2 + " And " + number3 + " Is " + popularNumber1 + ". " + " <br>")


//Multiplication of two numbers
var number4 = "823";
var number5 = "456";
var popularNumber2 = number4 * number5;
document.write("  The multiplication Of " + number4 + " And " + number5 + " Is " + popularNumber2 + ".   " + " <br>")

//Division of two numbers
var number01 = "823";
var number02 = "456";
var popularNumber3 = number01 / number02;
document.write("  The Division Of " + number01 + " And " + number02 + " Is " + popularNumber3 + ". " + " <br>")

//Modulus of two numbers
var number03 = "823";
var number04 = "456";
var popularNumber4 = number03 % number04;
document.write(" The Modulus Of " + number03 + " And " + number04 + " Is " + popularNumber4 + "." + " <br>")

//Q#03
document.write("<h2>JS MATHEMATIC EXPRESSION</h2>");
// a. Declare a variable.
var myVariable;

// b. Show the value of the variable in your browser.
document.write("Value after variable declaration is: " + myVariable + "<br>");

// c. Initialize the variable with some number.
myVariable = 5;

// d. Show the value of the variable in your browser.
document.write("Initial value: " + myVariable + "<br>");

// e. Increment the variable.
myVariable++;

// f. Show the value of the variable in your browser.
document.write("Value after increment is: " + myVariable + "<br>");

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value of the variable in your browser.
document.write("Value after addition is: " + myVariable + "<br>");

// i. Decrement the variable.
myVariable--;

// j. Show the value of the variable in your browser.
document.write("Value after decrement is: " + myVariable + "<br>");

// k. Show the remainder after dividing the variable's value by 3.
var remainder = myVariable % 3;

// l. Show the remainder in the browser.
document.write("The remainder is: " + remainder + "<br>");


//Q#04
// Store the ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Display the output
document.write("<h2>TICKET PRICE</h2>");
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR." + "<br>");

//Q#05
//Selecting the number for the multiplicatiuon tabkle
var number = 7;
//Display the multiplication table 
document.write(" Multiplication Table Of " + number + "<br>");
document.write("<h2>MULTIPLICATION TABLE</h2>");
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}
//Q#06
document.write("<h2>THE TEMPERATURE CONVERTER</h2>");
// Celsius to Fahrenheit conversion
var celsius = 20;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// Fahrenheit to Celsius conversion
var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

//Q#07

// Store the variables
var priceOfItem1 = 650;
var orderedQuantityOfItem1 = 2;
var priceOfItem2 = 100;
var orderedQuantityOfItem2 = 7;
var shippingCharges = 100;

// Calculate the total cost
var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;

// Display the receipt in the browser
document.write("<h2>SHOPPING CART</h2>");
document.write("<p>Price of Item 1: PKR" + priceOfItem1.toFixed(2) + "</p>");
document.write("<p>Ordered Quantity of Item 1: " + orderedQuantityOfItem1 + "</p>");
document.write("<p>Price of Item 2: PKR" + priceOfItem2.toFixed(2) + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + orderedQuantityOfItem2 + "</p>");
document.write("<p>Shipping Charges: PKR" + shippingCharges.toFixed(2) + "</p>");
document.write("<h3>Total Cost Of Your Order: PKR" + totalCost.toFixed(2) + "</h3>");

//Q#08

// Store the variables
var totalMarks = 1100;
var marksObtained = 825;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>MARKS SHEET</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");

//Q#09
// Store the variables
var usDollars = 10;
var saudiRiyals = 25;

// Define the exchange rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Calculate the total amount in Pakistani Rupees
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the result
document.write("<h2>CURRENCY IN PKR</h2>");
document.write("Total currency in PKR: " + totalPkr.toFixed(2) + "<br>");

//Q#10
// Initialize the variable with a number
var number = 100;

// Perform arithmetic operations in a single expression
var result = (((number + 5) * 10) / 2);

// Display the result
document.write("<h2>CALCULATION IN SINGLE EXPRESSION</h2>");
document.write("The result is: " + result + "<br>");

//Q#11
// Store the current year and birth year in variables
var currentYear = 2023;
var birthYear = 2004;

// Calculate the possible ages
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Display the results
document.write("<h2>THE AGE CALCULATOR</h2>");
document.write("They are either " + age1 + " or " + age2 + " years old." + "<br>");

//Q#12

// Store the radius of the circle in a variable
var radius = 20;

// Calculate the circumference
var circumference = 2 * 3.142 * radius;

// Calculate the area
var area = 3.142 * radius * radius;

// Display the results
document.write("<h2>THE GEOMETRIZER</h2>");
document.write("The Radius Of A Circle :" + radius + "<br>");
document.write("The Circumference Is " + circumference + "<br>");
document.write("The Area Is " + area + "<br>");

//Q#13
// Store your favorite snack, current age, maximum age, and estimated amount per day
var FavoriteSnack = "Chocolate Chips";
var CurrentAge = 18;
var EstimatedmaximumAge = 65;
var AmountOfSnacksPerDay = 3;

// Calculate the total number of snacks needed for the rest of your life
var yearsRemaining = EstimatedmaximumAge - CurrentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacksNeeded = daysRemaining * AmountOfSnacksPerDay;

// Display the result
document.write("<h2>The Lifetime Supply Calculator:</h2>" + "<br>");
document.write("FavoriteSnack: Chocolate Chips " + "<br>");
document.write("CurrentAge:18 " + "<br>");
document.write(" Estimated MaximumAge : 65" + "<br>");
document.write(" AmountOfSnacksPerDay : 3" + "<br>");
document.write("You will need " + totalSnacksNeeded + " " + FavoriteSnack + " to last you until the ripe old age of " + EstimatedmaximumAge + "." + "<br>");


