//Array of correct answers
const southAsia = ["india", "pakistan", "afganistan", "bangladesh", "nepal", "sri lanka", "bhutan", "maldives"]



//array and function to check if an answer is correct
const answer = (guess) => {
    if (southAsia.includes(guess)) {
      //Creates a new 'LI list' of correct guesses to display
      //need to change the text added to match the user input
      const correctGuessList = document.createElement("li");
      const correctGuesses = document.createTextNode("Country guessed by you");
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
  event.preventDefault()
  const input = document.getElementById("text-input").value;
  document.getElementById("feedback").innerHTML = answer(input);
};

//Event listener for submit button
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", onClick);
