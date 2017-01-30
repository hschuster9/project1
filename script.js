
//alert("Player 1: Enter a word for Player 2 to guess where it says 'Enter word'");
//when you click "submit" for enter word input run hideWord function

var checkedArray = [];
var incorrectLetters = [];
$("#set-word").on("click", hideWord);


function hideWord () {
  event.preventDefault();
  //store word entered into variable
  var inputValue = $("#word").val();
  //split the letters in word
  console.log(inputValue);
  //put letters into array
  var inputValueSplitArray = inputValue.split("");
  console.log(inputValueSplitArray);

  //replace letters with dashes
  var inputArray = [];
  for( var i = 0; i < inputValueSplitArray.length; i++){
    checkedArray.push("-");
    inputArray.push("-");
  }


  //display dashes on page
  $("#letterdashes").text(inputArray.join(' '));

  console.log(inputArray);
};

//alert("Player 2: Guess the letters of the word by typing one letter at a time where it says 'Enter letter'");
//when you click "submit" for enter letter input run displayLetters function
$("#guess-letter").on("click", displayLetters);

function displayLetters(){
  event.preventDefault();
  var inputValue = $("#word").val();
  var inputValueSplitArray = inputValue.split("");
  var guessedLetter = $("#letter").val();
  console.log(guessedLetter);

  //create variable that stores current checkedArray
  var currentCheckedArray = checkedArray;
  console.log(currentCheckedArray);

  for(var i = 0; i < inputValueSplitArray.length; i++){
    if(inputValueSplitArray[i] == guessedLetter) {
      checkedArray[i] = guessedLetter;
    }
    else {
      //need to hide input value
      //need function to display incorrect guesses



}
    //check to see if checkedArray is = first checkedArray variable
    //if it = then incorrect guess was made so add guessed letter to incorrect letters
    if (checkedArray == currentCheckedArray) {
      incorrectLetters.push(guessedLetter);
      console.log(incorrectLetters);

    }

  }

  var output = checkedArray.join("");
  console.log(output);
  console.log(incorrectLetters);

  $("#letterdashes").text(output);
  $("#incorrect").text(incorrectLetters);
}


function hangman (){

  var inputValue = $("#word").val();
  var inputValueSplitArray = inputValue.split("");
  var guessedLetter = $("#letter").val();


  if (guessedLetter != currentArray) {
    //reveal img 1
  }
}
