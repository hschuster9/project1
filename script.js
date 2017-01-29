
//when you click "enter" run hideWord function
$("#set-word").on("click", hideWord);

function hideWord () {
//store word entered into variable
  var inputValue = $("#word").val();

//take word entered put it into array
  var inputValue = $("#word").val();
  var inputArray = [inputValue.split("")]


  //prevent default
  return false;
}
;
