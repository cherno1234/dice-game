//Toglogchiin eeljiig hadgalakh huwisagch,player 1: 0,player 2:1
var activePlayer = 1;
//Tolgogchidiin onoog tsugluulakh huwisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog huwisagch
var roundScore = 0;

// Shoog ali talaaraa buusniig hadgalkh huwisagch , 1-6 gsn utgiig ene huwisagchid randomr uusgej ogno

//Prepare to Start Programm // Programm ekhlekehd beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
console.log(diceDom);
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
