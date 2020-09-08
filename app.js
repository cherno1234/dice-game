//Toglogchiin eeljiig hadgalakh huwisagch,player 1: 0,player 2:1
var activePlayer = 0;
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

// shoog shidekh event listenner
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 dotorkh sanamsargui toog  garagaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //Shoonii zurgiig web dee gargaj irne
  diceDom.style.display = "block";
  //Buusan sanamsargui toond hargalzakh shoonii zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Buusan tooog 1-s ylgaatai bol idewehtei toglogchiin eeljiin onoog oorchilnoo
  if (diceNumber !== 1) {
    //1-s ylgaatai too buulaa
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 buusan toglogchiig eeljiig ene hesegt solij ogno .
    //ene toglogchiin eeljindee tsuglasan toog 0 bolgon oo
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    //Toglogchiin eeljiig nogoo tolgoch uruu shiljuulne
    // herwee idewhtei toglogch ni 0 baiwal 1 bolgo
    // ugui bol idewhtei toglogchiif 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //Ulaan tsegiig shiljuulekh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //Shoog tur hide hiine
    diceDom.style.display = "none";
  }
});
