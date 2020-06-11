//Array of correct answers
const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]





// const OpenSuccessWindow = window.open(<a href="./testing-success.html"></a>);

//array and function to check if an answer is correct
const answer = (guess) => {
  if (southAsia.includes(guess.toLowerCase())) {
    //Creates a new 'LI list' of correct guesses to display
    const correctGuessList = document.createElement("li");
    const correctGuesses = document.createTextNode(guess.charAt(0).toUpperCase() + guess.slice(1).toLowerCase());//The latter part after create Text Node is setting the first letter to be upper case and the rest to be lowercase
    correctGuessList.appendChild(correctGuesses);
    document.getElementById("correct-guess-list").appendChild(correctGuessList);
    id="correct-guess-list"

    //Eliminating correct guesses from the original array:
    findIndex = southAsia.indexOf(guess.toLowerCase());
    const removeItem = southAsia.splice(findIndex, 1);
    console.log(southAsia);

    //The following command opens a new 'success' window when the original array hits 0 in length
    //ie: all the countries have been guessed correctly :D
    if (southAsia.length === 0) {
      open(href="./testing-success.html");
    }
    
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







//ref---------------------------------------------------------------------







