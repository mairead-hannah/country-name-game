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

    //Eliminating correct guesses from the original array:
    findIndex = southAsia.indexOf(document.getElementById("text-input").value);
    const removeItem = southAsia.splice(findIndex, 1);
    
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




