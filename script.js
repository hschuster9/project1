
//alert("Player 1: Enter a word for Player 2 to guess where it says 'Enter word'");
//when you click "submit" for enter word input run hideWord function
$("#set-word").on("click", hideWord);

function hideWord () {
  event.preventDefault();
//store word entered into variable
  var inputValue = $("#word").val();
//split the letters in word
    console.log(inputValue);
  var inputValueSplit = inputValue.split("");
    console.log(inputValueSplit);

//put letters into array
  var inputValueSplitArray = [inputValueSplit];
  console.log(inputValueSplitArray);


//not working

  var inputArray = [];
  for( var i = 0; i < inputValueSplit.length; i++){
  //inputArray.push("_"));
  inputArray.push("_");
    console.log(inputArray[i]);

  }
console.log(inputArray);

$()

  //replace letters in array with "_" by looping through and changing by indexOf
  /* question--
  var inputArray = [];
    for (var i = 0; i < inputValueSplitArray.length; i++){
          inputValueSplitArray[i].replace([i], "_");
        console.log(inputArray[i]);
        */
  };
/*
  //alert("Player 2: Guess the letters of the word by typing one letter at a time where it says 'Enter letter'");
//when you click "submit" for enter letter input run displayLetters function
$("#guess-letter").on("click", displayLetters);
function displayLetters(){
  //variable for input letter values
  var guessInput = $("#letter").val();
  //if statement: if letter guessed is in word reveal the letter in the word
    for (var i = 0; i < inputValueSplitArray.length; i++){
      if (inputValueSplitArray[i] == guessInput){
        //reveal letter in word
        break;
      }  else {
          //add character to hangman body
      }
      }
    }
  return false;
}
*/
