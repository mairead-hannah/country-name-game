//Array of correct answers
const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]

//array and function to check if an answer is correct
const answer = (guess) => {
    if (southAsia.includes(guess)) return `Correct!`
    else return `Oops that wasn't right, try again!`
};



// Function to return feedback from input field
const onClick = (event) => {
  event.preventDefault()
  const input = document.getElementById("text-input").value;
  document.getElementById("feedback").innerHTML = answer(input);
};

//Event listener for submit button
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", onClick);






//--------------------------------------------------------------------------------
//To Do
//How to grab the user's text input to test their answer
//reset button to begin again
//Remove correct items from the array for the following guesses
//Congratulation message when the user has guessed all the countries


//Issues to resolve
//Allow for either uppercase or lowercase letters

//Extra stuff
//Display the correct guesses on the browser
//pop up 'you've already guessed this country' in case one is typed twice
//Styling - MOBILE FIRST!
//map colouring in each country as you go - but only if works on a mobile??






//--------------------------------------------------------------------------
//Ollie's Brief:
// # Project 1 - JavaScript Game
// ​
// ## The task
// Welcome to the bowels of JavaScript - it's time to try your hand at a Javascript browser game! The idea is to help you familiarise yourself with JavaScript syntax, methods and functions and create something impactful for your portfolio.
// ​
// ## The delivery
// You will deliver the game in a presentation on Friday 12th June that will be recorded. The game should be fully playable by that date, but you have the rest of the course to add finishing touches and improve the code.
// ​
// ## The criteria
//  - Built using HTML, CSS and JavaScript
//  - Playable by a user using click events, typed inputs and keyboard events.
//  - No use of HTML canvas.
//  - Responsive, and correctly viewable at all device widths.
//  - Reset functionality to allow the game to be immediately replayed.
//  - MUST make use of functions to neatly organise code.
//  - MUST follow ES6+ JS coding standards.
//  - MUST be hosted on your Github with at least 15 git commits.
// ​
// If you want to push yourself, try and build it using classes to be fully object oriented!!!
// ​
// BEST OF LUCK!






//copies of stuff below--------------------------------------------------------------------------------------------
// //Array of correct answers
// const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]

// //array and function to check if an answer is correct
// const answer = (guess) => {
//   for (let i = 0; i < southAsia.length; i++) {
//     if (southAsia.includes(guess)) return `Correct!`
//     else return `Oops that wasn't right, try again!`
//   }
// }
// console.log(answer("pakistan"));



// // Event listener on submit button
// const onClick = (event) => {
//   event.preventDefault()
//   document.getElementById("feedback").innerHTML = "You've submitted an answer!";
// };

// const button = document.getElementsByTagName("button")[0];
// console.log(button);

// button.addEventListener("click", onClick);