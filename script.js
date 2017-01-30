
//alert("Player 1: Enter a word for Player 2 to guess where it says 'Enter word'");
//when you click "submit" for enter word input run hideWord function
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
  inputArray.push("_");
}
console.log(inputArray);

//display dashes on page
  $("#letterdashes").text(inputArray.join(' '));

  console.log(inputArray);
  };

  //alert("Player 2: Guess the letters of the word by typing one letter at a time where it says 'Enter letter'");
//when you click "submit" for enter letter input run displayLetters function
//$("#guess-letter").on("click", displayLetters);

  /*  inputSplitValueArray = ['c', 'a', 'm', 'a', 'r', 'a']

    function handleGuess(letter) {
      var guessedLetter = letter
      var checkedArray = []
      for(var i=0; i < inputSplitValueArray.length; i++) {
        if(inputSplitValueArray[i] == guessedLetter) {
          checkedArray.push(guessedLetter)
        } else {
          checkedArray.push('-')
        }
      }
      var output = checkedArray.join('')
      console.log(output)
    }
*/

/*

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
*/
