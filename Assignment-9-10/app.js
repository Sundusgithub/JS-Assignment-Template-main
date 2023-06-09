
//ASSIGNMENT # 9-10 : USER INPUT & CONDITIONAL STATEMENT

//Q#01
// Prompt the user for the city name
var cityName = prompt("Enter the city name:");

// Check if the user entered "Karachi"
if (cityName.toLowerCase() === "karachi") {
  document.write("Welcome to the city of lights!" + "<br>");
} else {
  document.write("Welcome to " + cityName + "<br>");
}

//Q#02
// Prompt the user for the gender
var gender = prompt("Enter your gender:");

// Check the gender and display the appropriate greeting
if (gender.toLowerCase() === "male") {
  document.write("Good Morning Sir." + "<br>");
} else if (gender.toLowerCase() === "female") {
  document.write("Good Morning Ma'am." + "<br>");
} else {
  document.write("Good Morning!" + "<br>");
}

//Q#03
    // Prompt the user for the color of the traffic signal
    var signalColor = prompt("Enter the color of the traffic signal:");

    // Convert the color to lowercase for comparison
    signalColor = signalColor.toLowerCase();

    // Check the signal color and display the appropriate message
    if (signalColor === "red") {
      document.write("Must Stop" + "<br>");
    } else if (signalColor === "yellow") {
      document.write("Ready to move" + "<br>");
    } else if (signalColor === "green") {
      document.write("Move now" + "<br>");
    } else {
      document.write("Invalid color" + "<br>");
    }

//Q#04
    // Prompt the user for the remaining fuel in the car
    var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");

    // Convert the fuel level to a number
    remainingFuel = parseFloat(remainingFuel);

    // Check if the fuel level is less than 0.25 liters
    if (remainingFuel < 0.25) {
      document.write("Please refill the fuel in your car");
    } else {
      document.write("You have enough fuel in your car");
    }

//Q#05
// a.
var a = 4;
if (++a === 5){
  alert("given condition for variable a is true"); // Output: "given condition for variable a is true"
}

// b.
var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true"); // No output (condition is false)
}

// c.
var c = 12;
if (c++ === 13){
  alert("condition 1 is true"); // No output (condition is false)
}
if (c === 13){
  alert("condition 2 is true"); // Output: "condition 2 is true"
}
if (++c < 14){
  alert("condition 3 is true"); // No output (condition is false)
}
if(c === 14){
  alert("condition 4 is true"); // Output: "condition 4 is true"
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals"); // Output: "The cost equals"
}

// e.
if (true){
  alert("True"); // Output: "True"
}
if (false){
  alert("False"); // No output (condition is false)
}

// f.
if("car" < "cat"){
  alert("car is smaller than cat"); // Output: "car is smaller than cat"
}

//Q#06
    // Prompt the user for marks obtained in three subjects
    var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));

    // Prompt the user for total marks
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    // Calculate the total marks obtained
    var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;

    // Calculate the percentage
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    // Determine the grade and remarks based on the percentage
    var grade, remarks;
    if (percentage >= 80) {
      grade = "A-one";
      remarks = "Excellent";
    } else if (percentage >= 70) {
      grade = "A";
      remarks = "Good";
    } else if (percentage >= 60) {
      grade = "B";
      remarks = "You Need To Improve";
    } else {
      grade = "Fail";
      remarks = "Sorry";
    }

    // Display the result on the page
    document.write("<h2>MARKS SHEET:</h2>");
    document.write("Total Marks: " + totalMarks + "<br>");
    document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
    document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
    document.write("Grade: " + grade + "<br>");
    document.write("Remarks: " + remarks  + "<br>");

//Q#07
   document.write("<h2>GUESS GAME</h2>");

    // Generate a random secret number between 1 and 10
    var secretNumber = Math.floor(Math.random() * 10) + 1;

    // Prompt the user to enter their guess
    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

    // Check if the user's guess matches the secret number
    if (userGuess === secretNumber) {
      document.write("Bingo! Correct answer" + "<br>");
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
      document.write("Close enough to the correct answer" + "<br>");
    } else {
      document.write("Wrong guess. The secret number was " + secretNumber + "<br>");
    }

//Q#08

    // Prompt the user to enter a number
    var number = (+prompt("Enter a number:"));

    // Check if the number is divisible by 3
    if (number % 3 === 0) {
      document.write(number + " is divisible by 3" + "<br>");
    } else {
      document.write(number + " is not divisible by 3" + "<br>");
    }

//Q#09

    // Prompt the user to enter a number
    var number = +(prompt("Enter a number:"));

    // Check if the number is even or odd
    if (number % 2 === 0) {
      document.write(number + " is an even number" + "<br>");
    } else {
      document.write(number + " is an odd number" + "<br>");
    }

//Q#10

    // Prompt the user to enter the temperature
    var temperature = +(prompt("Enter the temperature:"));

    // Check the temperature and display the corresponding message
    if (temperature > 40) {
      document.write("It is too hot outside."+ "<br>");
    } else if (temperature > 30) {
      document.write("The Weather today is Normal."+ "<br>");
    } else if (temperature > 20) {
      document.write("Today's Weather is cool."+ "<br>");
    } else if (temperature > 10) {
      document.write("OMG! Today's weather is so Cool."+ "<br>");
    } else {
      document.write("The temperature is too low."+ "<br>");
    }

//Q#11
// Prompt the user to enter the first number
var firstNumber = +(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = +(prompt("Enter the second number:"));

// Prompt the user to enter the operation
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

// Perform the calculation based on the operation
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  result = "Invalid operation";
}

// Display the calculated result
document.write("The result of " + firstNumber + " " + operation + " " + secondNumber + " is " + result + "<br>");
