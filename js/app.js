// text animition
var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

// responsive navber
let burger = document.getElementById("burger"),
  nav = document.getElementById("main-nav"),
  slowmo = document.getElementById("slowmo");

burger.addEventListener("click", function (e) {
  this.classList.toggle("is-open");
  nav.classList.toggle("is-open");
});

slowmo.addEventListener("click", function (e) {
  this.classList.toggle("is-slowmo");
});

/* Onload demo - dirty timeout */
let clickEvent = new Event("click");

window.addEventListener("load", function (e) {
  slowmo.dispatchEvent(clickEvent);
  burger.dispatchEvent(clickEvent);

  setTimeout(function () {
    burger.dispatchEvent(clickEvent);

    setTimeout(function () {
      slowmo.dispatchEvent(clickEvent);
    }, 3500);
  }, 5500);
});




// !option togol in hire page
function displayBoatBiminiInfo(boatType) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  document.getElementById(boatType).style.display = 'block';
    for (i = 1; i < boatType.length; i++) {
      document.getElementById(alphabet.substring(0, i)).style.display = 'none';
    }
    for (i = boatType.length + 1; i < 26; i++) {
      document.getElementById(alphabet.substring(0, i)).style.display ='none';
    }
}