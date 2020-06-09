// const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]


// const answer = (guess) => {
//   for (let i = 0; i < southAsia.length; i++) {
//     if (southAsia.includes(guess)) return `Correct!`
//     else return `Oops that wasn't right, try again!`
//   }
// }
// console.log(answer("pakistan"));


const onClick = (event) => {
  event.preventDefault()
  document.getElementById("feedback").innerHTML = "Testing!";
};


const button = document.getElementsByTagName("button")[0];
console.log(button);

button.addEventListener("click", onClick);




//--------------------------------------------------------------------------------
//To Do
//link to DOM, click event etc
//Remove correct items from the array for the following guesses
//Congratulation message when the user has guessed all the countries


//Issues to resolve
//Allow for either uppercase or lowercase letters
//Reset button to begin again


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