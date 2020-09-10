//Togloomiin bvkh gazart ashigladakh global huwisagchiig end zarlay
//Tolgoom duussan esekhiig hadgalakh tolowiin huwisagch
var isNewGame;

var activePlayer, scores, roundScore;
//Shoonii zurgiig uzuulekh elementiin Dom-s haij olood ene hadgalay
var diceDom = document.querySelector(".dice1");
var diceDom2 = document.querySelector(".dice2");

//Togloom ekhlvvlne

initGame();

//togloomiig shineer ehlehed beltgene
function initGame() {
  //Togloom ekhellee gedeg tolowt oruulna.

  isNewGame = true;

  diceDom.style.display = "none";
  diceDom2.style.display = "none";
  //Toglogchiin eeljiig hadgalakh huwisagch,player 1: 0,player 2:1
  activePlayer = 0;
  //Tolgogchidiin onoog tsugluulakh huwisagch
  scores = [0, 0];

  // Toglogchiin eeljindee tsugluulj baigaa onoog huwisagch
  roundScore = 0;

  //Prepare to Start Programm // Programm ekhlekehd beltgey
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //Tologchdiin neriig butsaaj gargakh
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

// shoog shidekh event listenner
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isNewGame) {
    //1-6 dotorkh sanamsargui toog  garagaj awna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    var diceNumber2 = Math.floor(Math.random() * 6) + 1;
    //Shoonii zurgiig web dee gargaj irne
    diceDom.style.display = "block";
    diceDom2.style.display = "block";
    //Buusan sanamsargui toond hargalzakh shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";
    diceDom2.src = "dice-" + diceNumber2 + ".png";

    //Buusan tooog 1-s ylgaatai bol idewehtei toglogchiin eeljiin onoog oorchilnoo
    if (diceNumber !== 1 && diceNumber2 !== 1) {
      //1-s ylgaatai too buulaa
      roundScore = roundScore + diceNumber + diceNumber2;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //1 buusan toglogchiig eeljiig ene hesegt solij ogno .
      //ene toglogchiin eeljindee tsuglasan toog 0 bolgon oo
      switchToNextPlayer();
    }
  }
});

// Hold button event Listenner
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isNewGame) {
    //Ug toglogchiin tsugluulsan eeljnii onoog global onoon deer ni nemj ogno .
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Delgets deerkh onoog oorchilno
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //ug toglogch hojson esekhiig shalgakh 100-s ikh bol hojno

    if (scores[activePlayer] >= 100) {
      //Togloomiig duussan tolowt oruulana
      isNewGame = false;
      //Ylagch gesen textiig nerniih ni orond gargana....
      document.getElementById("name-" + activePlayer).textContent =
        "Winner !!!!!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  }
});

//Ene function ni toglokh daraagiin toglogch ruu shiljuulne
function switchToNextPlayer() {
  //ene toglogchiin eeljindee tsuglasan toog 0 bolgon oo
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  //Toglogchiin eeljiig nogoo tolgoch uruu shiljuulne
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  //Ulaan tsegiig shiljuulekh
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //Shoog tur hide hiine
  diceDom.style.display = "none";
  diceDom2.style.display = "none";
}

// newgame button buyu Shine togloom ekhlvvlekh towchnii event listenner

document.querySelector(".btn-new").addEventListener("click", initGame);
