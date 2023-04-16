// // Question 1
// // Write a JavaScript program that accepts tw number in prompts and display the larger one in the console
// let firstPrompt = prompt("Enter your first number");
// let secondPrompt = prompt("Enter your last number");

// if (firstPrompt > secondPrompt) {
//   console.log(firstPrompt);
// } else if (secondPrompt > firstPrompt) {
//   console.log(secondPrompt);
// } else 
//   console.log("you writed equal numbers");

//   //Question 2

// let number = prompt("Enter a number:");

// if (number > 0) {
//   alert("The number have plus sign.");
// } else if (number < 0) {
//   alert("The number have minus sign");
// } else {
//   alert("you entered wrong number");
// }





// //Question 3

// let firstNumber = prompt("Enter first number:");
// let secondNumber = prompt("Enter second number:");
// let thirdNumber = prompt("Enter third number:");
// let forthNumber = prompt("Enter fourth number:");
// let fifthNumber = prompt("Enter fifth number:");

// let largest = firstNumber;

// if (secondNumber > largest) {
//   largest = secondNumber;
// }
// if (thirdNumber > largest) {
//   largest = thirdNumber;
// }
// if (forthNumber > largest) {
//   largest = forthNumber;
// }
// if (fifthNumber > largest) {
//   largest = fifthNumber;
// } else {
//     console.log("you have typed same numbers")
// }

// console.log("The largest number is " + largest);


// //Question 4

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }



// //Question 5

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     }

//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     }

//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     }

//     else {
//       console.log(i);
//     }
//   }




// //Question 6


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }


// //Question 7

// const marks = [];
// for (let i = 1; i <= 1; i++) {
//   marks.push(parseInt(prompt(`Enter the mark for student ${i}:`)));
// }
// const sum = marks.reduce((acc, curr) => acc + curr, 0);
// const average = sum / marks.length;

// let grade;
// if (average < 30) {
//   grade = "F";
// } else if (average < 40) {
//   grade = " E";
// } else if (average < 50) {
//   grade = "D";
// } else if (average < 60) {
//   grade = "C";
// } else if (average < 70) {
//   grade = "B";
// } else if (average < 80) {
//   grade = "A";
// } else if (average < 90) {
//   grade = "A+";
// } else {
//   grade = "A";
// }

// alert(`Average marks: ${average.toFixed(2)}\nGrade: ${grade}`);

// ------------------------------------------------------------------------------------------------------------------------------

// JAVASCRIPT ASSIGNMENT 01




// TASK 01
// Create a variable for ZakatPercentage
// var zakatPercentage = 0.025;

// // Create a variable for User input
// var userInput = prompt("Please enter the value of your assets for zakat calculation:");

// // Convert the input string to a number
// userInput = Number(userInput);

// var result = zakatPercentage * userInput;

// // Display Result
// alert("Your zakat value is : " + result);

// 




// Task 2

// Here I create a  variable for No. of Family Members
// var familyMembers = prompt("Please enter the total number of family members:");

// // IN this I Convert the input string to a number
// familyMembers = Number(familyMembers);


// var selectedMethod = prompt("Please choose a fitrah method:\n1. Method 1 - Rs. 100 per family member\n2. Method 2 - Rs. 200 per family member");
// var methodPrice;

// if (selectedMethod === "1") {
//   methodPrice = 100;
// } else if (selectedMethod === "2") {
//   methodPrice = 200;
// } else {
//   // Handle invalid input
//   alert("Invalid input! Please choose a valid fitrah method.");
// }

// if (methodPrice) {
//   // Calculate the fitrah amount by multiplying the selected method's price with the number of family members
//   var fitrahAmount = methodPrice * familyMembers;

//   // Display the calculated fitrah
//   alert("Your fitrah amount is Rs. " + fitrahAmount);
// }

// Task 3


// Generate a random number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Ask the user to enter a guess No.
// var userGuess = prompt("Guess the secret number (between 1 and 10):");

// // Convert the input string in  to a number
// userGuess = Number(userGuess);

// // Use an if-else statement to check if the user's guess matches the secret number
// if (userGuess === secretNumber) {
//   // If the guess is correct, display a congratulations message
//   alert("Congratulations! You guessed the secret number.");
// } else if (userGuess < secretNumber) {
//   // If the guess is too low, display a message to guess again
//   alert("Too low! Try again.");
// } else {
//   // If the guess is too high, display a message to guess again
//   alert("Too high! Try again.");
// }
// Task 4

// Ask the user to enter a your name here
// var userName = prompt("Please enter your name:");

// // Capitalize the first letter of the name with Function
// var capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);

// // Here Display the capitalized name
// console.log("Your name in capitalized case: " + capitalizedUserName);


// Task 05
// Create empty arrays for contact numbers and names
// var contactNumbers = [];
// var contactNames = [];

// // Ask the user to enter contact numbers and names
// var numberOfContacts = parseInt(prompt("Enter the number of contacts:"));

// for (var i = 0; i < numberOfContacts; i++) {
//   var contactNumber = prompt("Enter contact number " + (i + 1) + ":");
//   var contactName = prompt("Enter contact name " + (i + 1) + ":");
  
//   // Push contact number and name into respective arrays
//   contactNumbers.push(contactNumber);
//   contactNames.push(contactName);
// }

// // Display contact numbers and names in console
// console.log("Contact Numbers:");
// for (var i = 0; i < contactNumbers.length; i++) {
//   console.log(contactNumbers[i]);
// }

// console.log("Contact Names:");
// for (var i = 0; i < contactNames.length; i++) {
//   console.log(contactNames[i]);
// }

// Task 08

// Original array with 15 players
// var WorldCupSquad = ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8", "Player9", "Player10", "Player11", "Player12", "Player13", "Player14", "Player15"];

// // Create a copy of the original array
// var finalTeamPlayers = WorldCupSquad.slice(0, 11);

// // Display the final team players
// console.log("Final Team Players for Tomorrow's Match:");
// console.log(finalTeamPlayers);

// // Task 07
// // Ask user for nationality, gender, and age
// var nationality = prompt("Enter your nationality (Pakistani/Indian):");
// var gender = prompt("Enter your gender (Male/Female):");
// var age = parseInt(prompt("Enter your age:"));
// if (nationality === "Pakistani" || nationality === "Indian") {
//   // Check gender and age
//   if (gender === "Male" && age > 18) {
//     alert("Congratulations! You are eligible to vote.");
//   } else if (gender === "Female" && age > 18) {
//     var married = prompt("Are you married? (Yes/No):");
//     // Check marital status
//     if (married === "Yes") {
//       alert("Congratulations! You are eligible to vote.");
//     } else {
//       alert("Sorry, you are not eligible to vote.");
//     }
//   } else {
//     alert("Sorry, you are not eligible to vote.");
//   }
// } else {
//   alert("Sorry, you are not eligible to vote.");
// // Check nationality

// }









