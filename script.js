
alert("Player 1: Type a word for Player 2 to guess where it says, 'Enter word' then click 'Submit'");

var checkedArray = [];
var incorrectLetters = [];
var wordArray = [];
$("#set-word").on("click", enterWord);

function enterWord () {

  event.preventDefault();
  $('.enter-words').toggle();
  //store word entered into variable
  var wordInput = $("#word").val();
  console.log(wordInput);
  //split the letters in word
  //put letters into array
  var wordInputSplitArray = wordInput.split("");
  console.log(wordInputSplitArray);
  //replace letters with dashes
  var wordArray = [];
  for( var i = 0; i < wordInputSplitArray.length; i++){
    checkedArray.push("-");
    wordArray.push("-");
}

  alert("Player 2: Guess the letters of the word by typing one letter at a time where it says 'Enter letter'");

  //display dashes on page
  $("#letterdashes").text(wordArray.join(' '));

};

//alert("Player 2: Guess the letters of the word by typing one letter at a time where it says 'Enter letter'");
//when you click "submit" for enter letter input run displayLetters function
$("#guess-letter").on("click", displayLetters);

function displayLetters(){
  event.preventDefault();
  var wordInput = $("#word").val();
  var wordInputSplitArray = wordInput.split("");
  var guessedLetter = $("#letter").val();
  var image = [];
      image[1] = '<img src="hangman2.jpeg">';
      image[2] = '<img src="hangman3.jpeg">';
      image[3] = '<img src="hangman4.jpeg">';
      image[4] = '<img src="hangman5.jpeg">';
      image[5] = '<img src="hangman6.jpeg">';
      image[6] = '<img src="hangman7.jpeg">';
  console.log(guessedLetter);

var isMatched = false;
  for(var i = 0; i < wordInputSplitArray.length; i++){
    if(wordInputSplitArray[i] == guessedLetter) {
      checkedArray[i] = guessedLetter;
      console.log(checkedArray);
      console.log(wordArray);
      isMatched = true;
      console.log(`it's a match at index: $[i]`);
    }

  }
  if (isMatched == false){

    incorrectLetters.push(guessedLetter);
    console.log(incorrectLetters);

    var numberOfChances = image.length - 1;
    var numberofChancesLeft = numberOfChances--;
    console.log(numberofChancesLeft);
    console.log(numberOfChances);
  if (wrongGuesses > numberOfChances) {
    alert("game over");
  }

    //image is an array of all images
    //define var for number of wrong guesses, aka incorrectLetters.length
    var wrongGuesses = incorrectLetters.length;
    $('div .hangman').html(image[wrongGuesses]);

  }

  var output = checkedArray.join("");
  console.log(output);
  console.log(incorrectLetters);

  $("#letterdashes").text(output);
  $("#incorrect").text(incorrectLetters);
}
;
