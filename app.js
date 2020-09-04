//Toglogchiin eeljiig hadgalakh huwisagch,player 1: 0,player 2:1
var activePlayer = 1;
//Tolgogchidiin onoog tsugluulakh huwisagch
var scores = [0, 0];

// Toglogchiin eeljindee tsugluulj baigaa onoog huwisagch
var roundScore = 0;

// Shoog ali talaaraa buusniig hadgalkh huwisagch , 1-6 gsn utgiig ene huwisagchid randomr uusgej ogno
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;
// document.querySelector("#score-1").innerHTML = "<em>YES<em>";

//Prepare to Start Programm // Programm ekhlekehd beltgey
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";

console.log("Dice: " + dice);
