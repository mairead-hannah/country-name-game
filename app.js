//Array of correct answers
const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]

//array and function to check if an answer is correct
const answer = (guess) => {
  if (southAsia.includes(guess)) {
    //Creates a new 'LI list' of correct guesses to display
    const correctGuessList = document.createElement("li");
    //QUESTION!! In the line below, why can't I simply put the function 'input' in brackets after 'createTextNode'??  Surely what is typed there is exactly the same as the input function anyway....?
    const correctGuesses = document.createTextNode(document.getElementById("text-input").value);
    correctGuessList.appendChild(correctGuesses);
    document.getElementById("correct-guess-list").appendChild(correctGuessList);
    id="correct-guess-list"
    //I also want to eliminate correct guesses from the original array and/or create new arrays each time???
    
    //return must remain at the end because it stops the function running
    return `Correct!` 
  }
  else {
    return `Oops that wasn't right, try again!`
  }
};

// Function to return feedback from input field
const onClick = (event) => {
  event.preventDefault();
  const input = document.getElementById("text-input").value;
  document.getElementById("feedback").innerHTML = answer(input);
};
//Event listener for submit button
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", onClick);



//Reset function that reloads the page
const resetOnClick = (event) => {
  event.preventDefault();
  const reset = location.reload();
}
//Event listener for reset button
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetOnClick);






//--------------------------------------------------------------------------------
//To Do
//Remove correct items from the array to allow multiple guesses
//pop up 'you've already guessed this country' where one is typed twice
//Congratulation message when the user has guessed all the countries
//get page hosted on github
//put link to page on website


//Issues to resolve
//Allow for either uppercase or lowercase letters
//capitalise first letter in displayed answers
//only display <h3>Correct answers</h3> when the answers begin
//automatically delete text from input field after pressing 'enter' or clicking submit


//Extra stuff
//Display the correct guesses on the browser - maybe with country name and flag?
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


//----COPY OF MINIMUM VIABLE PRODUCT CODE BELOW-----------------------------------
// //Array of correct answers
// const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]

// //array and function to check if an answer is correct
// const answer = (guess) => {
//     if (southAsia.includes(guess)) return `Correct!`
//     else return `Oops that wasn't right, try again!`
// };


// // Function to return feedback from input field
// const onClick = (event) => {
//   event.preventDefault()
//   const input = document.getElementById("text-input").value;
//   document.getElementById("feedback").innerHTML = answer(input);
// };

// //Event listener for submit button
// const button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", onClick);
