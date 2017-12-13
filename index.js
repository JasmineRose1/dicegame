// create a function that returns dice rolls - user should be able to select the number of dice and how many sides each dice has
$("#rollDice").on('click', function(){
  var dice = $("#chooseNumberOfDice").val();
  var diceSides = $("#chooseNumbderOfSides").val();
  var diceRoll = Math.floor(Math.random()*12 + 1)
  $("#result").text(diceRoll);
})
