//ASSIGNMENT#13-15 :ARRAYS
//Q#01
// Declare an empty array using literal notation
var studentNames = [];

// You can add student names to the array later
studentNames.push("SARA");
studentNames.push("SAIMA");
studentNames.push("SUNDUS");
studentNames.push("SABIHA");

// Display the array
console.log(studentNames);

//Q#02
// Declare an empty array using object notation
var studentNames = new Array();

// You can add student names to the array later
studentNames.push("SARA");
studentNames.push("SAIMA");
studentNames.push("SUNDUS");
studentNames.push("SABIHA");

// Display the array
console.log(studentNames);

//Q#03
// Declare and initialize a string array
var strings = ["SALAAM!", "JS", "LOVERS"];
console.log(strings[0]); // Output: SALAAM!
console.log(strings[1]); // Output: JS
console.log(strings[2]); // Output: LOVERS

//Q#04
// Declare and initialize a numbers array
var numbers = [1, 2, 3, 4, 5];

// Accessing elements in the array
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: 2
console.log(numbers[2]); // Output: 3
console.log(numbers[3]); // Output: 4
console.log(numbers[4]); // Output: 5

//Q#05
// Declare and initialize a boolean array
var boolArray = [true, false];

// Accessing elements in the array
console.log(boolArray[0]); // Output: true
console.log(boolArray[1]); // Output: false

//Q#06
// Declare and initialize a mixed array
var mixedArray = [9, false, { name: "SARA", age: 86 }];

// Accessing elements in the array
console.log(mixedArray[0]); // Output: 9
console.log(mixedArray[1]); // Output: false
console.log(mixedArray[2]); // Output:{ name: "SARA", age: 86 }

//Q#07
// Declare and initialize the array of education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Display the qualifications in the browser
document.write("<h3>Education Qualifications in Pakistan:</h3>");

document.write("<ul>");
for (var i = 0; i < qualifications.length; i++) {
  document.write("<li>" + qualifications[i] + "</li>");
}

//Q#08
// Store student names in an array
var studentNames = ["Michael", "John", "Tony"];

// Store scores of the students in another array
var scores = [320, 230, 480];

// Calculate percentage for each student
var totalMarks = 500;
var percentages = [];
for (var i = 0; i < scores.length; i++) {
  var percentage = (scores[i] / totalMarks) * 100;
  percentages.push(percentage);
}

// Display scores and percentages for each student
for (var i = 0; i < studentNames.length; i++) {
  document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage is " + percentages[i] + "%<br>");
}

//Q#09
// Initialize an array with color names
var colors = ["Purple", "Pink", "Yellow","Violet"];

// Display the array elements in the browser
document.write("Initial Array: " + colors.join(", ") + "<br>");

// Ask the user to add a color to the beginning
var colorAdded = prompt("Enter a color in beginning:");
colors.unshift(colorAdded);

// Display the updated array
document.write("Array after adding color to the beginning: " + colors.join(", ") + "<br>");

// Ask the user to add a color to the end
colorAdded = prompt("Enter a color in the end:");
colors.push(colorAdded);

// Display the updated array
document.write("Array after adding color to the end: " + colors.join(", ") + "<br>");

// Add two more colors to the beginning
colors.unshift("Red", "Orange");

// Display the updated array
document.write("Array after adding two colors to the beginning: " + colors.join(", ") + "<br>");

// Delete the first color in the array
colors.shift();

// Display the updated array
document.write("Array after deleting the first color: " + colors.join(", ") + "<br>");

// Delete the last color in the array
colors.pop();

// Display the updated array
document.write("Array after deleting the last color: " + colors.join(", ") + "<br>");

// Ask the user to specify the index and color to add
var indexToAdd = prompt("Enter the index to add a color:");
colorAdded = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorAdded);

// Display the updated array
document.write("Array after adding color at the specified index: " + colors.join(", ") + "<br>");

// Ask the user to specify the index and number of colors to delete
var positionToDelete = prompt("Enter the position to delete color(s):");
var numToDelete = prompt("Enter the number of colors to delete:");
colors.splice(positionToDelete, numToDelete);

// Display the updated array
document.write("Array after deleting color(s) at the specified index: " + colors.join(", ") + "<br>");

//Q#10
// Create an array to store student scores
var unorderedscores = ["345", "876", "128", "456"]
var scores = [345, 876, 128, 456];
// Sort the scores in ascending order
scores.sort();

// Print the sorted scores
document.write("Scores Of Students: " + unorderedscores + "<br>");
document.write("Ordered Scores Of Students:" + scores + "<br>")
for (var i = 0; i < scores; i++) {
    document.write(scores[i]);
}

//Q#11
// Initialize an array with city names
var cities = ["KARACHI", "LAHORE", "PUNJAB", "BALOCHISTAN", "QUETTA"];

// Create an empty array to store selected cities
var selectedCities = [];

// Copy 3 elements from the cities array to selectedCities array
for (var i = 0; i < 3; i++) {
    selectedCities.push(cities[i]);
}

// Print the selected cities
console.log("Selected cities:", selectedCities);

//Q#12
// Initialize an array
var arr = ["This", "is", "my", "cat"];

// Create a single string from the array
var result = arr.join(" ");
console.log("Array:" + arr)
// Print the resulting string
console.log("string:" + result);

//Q#13
// Create a new array
var devices = [];

// Store values in the array
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

// Display the values in FIFO order
console.log("Devices:", devices.join(", "));

// Access and display the values in the order they were stored
for (var i = 0; i < devices.length; i++) {
    console.log("Out:", devices[i]);
}

//Q#14 
// Create a new array
var devices = [];

// Store values in the array
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");

// Display the values in FIFO order
console.log("Devices:", devices.join(", "));

// Access and display the values in the order they were stored
for (var i = devices.length - 1; i >= 0; i--) {
    console.log("Out:", devices[i]);
}
//Q#15
// Array of phone manufacturers
var Phonemanufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the dropdown/select menu using document.write()
document.write('<select>');
for (var i = 0; i < Phonemanufacturers.length; i++) {
    document.write('<option value="' + Phonemanufacturers[i] + '">' + Phonemanufacturers[i] + '</option>' + "<br>");
}
document.write('</select>' + "<br>");

