
//alert("Player 1: Type a word for Player 2 to guess where it says, 'Enter word' then click 'Submit'");
$(".enter-letters").hide();
var checkedArray = [];
var incorrectLetters = [];
var wordArray = [];

$("#set-word").on("click", enterWord);
  function enterWord () {

    event.preventDefault();
    $(".enter-words").hide();
    $(".enter-letters").show();
    //store word entered into variable
    var wordInput = $("#word").val();
    console.log(wordInput);

    //split the letters in word and put letters into array
    var wordInputSplitArray = wordInput.split("");
    console.log(wordInputSplitArray);
    //replace letters with dashes
    var wordArray = [];
    for( var i = 0; i < wordInputSplitArray.length; i++){
      checkedArray.push("-");
      wordArray.push("-");
        }
  //display dashes on page
  $("#letterdashes").text(wordArray.join(' '));
  //alert for player 2's turn
  alert("Player 2: Guess the letters of the word where it says, 'Enter letter'");
};

//when you click "submit" for enter letter input
$("#guess-letter").on("click", displayLetters);
function displayLetters(){

    event.preventDefault();
    var wordInput = $("#word").val();
    var wordInputSplitArray = wordInput.split("");
    var guessedLetter = $("#letter").val();
    var image = [];
        image[1] = '<img src="images/hangman2.jpeg">';
        image[2] = '<img src="images/hangman3.jpeg">';
        image[3] = '<img src="images/hangman4.jpeg">';
        image[4] = '<img src="images/hangman5.jpeg">';
        image[5] = '<img src="images/hangman6.jpeg">';
        image[6] = '<img src="images/hangman7.jpeg">';
    console.log(guessedLetter);

    //var to check to see if guess matches letter -> false for wrong
    var isMatched = false;

    //loop through word to find match
      for(var i = 0; i < wordInputSplitArray.length; i++){
        if(wordInputSplitArray[i] == guessedLetter) {
          checkedArray[i] = guessedLetter;
          isMatched = true;
          console.log("Match at index: " + [i]);
        }

      }
        //incorrect guess
        if (isMatched == false){

          //pushes guessed letter to display in incorrect letters
          incorrectLetters.push(" " + guessedLetter);
          console.log(incorrectLetters);

          //all images in array
          var numberOfChances = image.length - 2;
          console.log(numberOfChances);

          //define var for number of wrong guesses --> incorrectLetters.length
          var wrongGuesses = incorrectLetters.length;
          if (wrongGuesses > numberOfChances) {
          alert("Game over");
        }
          $('div .hangman').html(image[wrongGuesses]);

        }

        var output = checkedArray.join("");
        $("#letterdashes").text(output);
        $("#incorrect").text(incorrectLetters);
      };
