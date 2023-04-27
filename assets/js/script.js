// Making elements in the HTML accessable in JS
const word1Box = document.getElementById("word-1-box");
const word2Box = document.getElementById("word-2-box");
const word3Box = document.getElementById("word-3-box");
const word4Box = document.getElementById("word-4-box");
const word5Box = document.getElementById("word-5-box");
const word6Box = document.getElementById("word-6-box");
const deleteButton = document.getElementById("delete");
const enterButton = document.getElementById("enter");
const keyRow1 = document.getElementById("keys-row-1");
const keyRow2 = document.getElementById("keys-row-2");
const keyRow3 = document.getElementById("keys-row-3");

// Array of each box for words
const wordBoxes = [word1Box, word2Box, word3Box, word4Box, word5Box, word6Box];

//Establishes current word box
let targetBox = word1Box;

//Create word arrays to fill boxes
let word1 = [];
let word2 = [];
let word3 = [];
let word4 = [];
let word5 = [];
let word6 = [];

//Array of each word
const words = [word1, word2, word3, word4, word5, word6];

//Establishes current word
let targetWord = word1;

//Strings to provide letters for digital keyboard
const row1 = "QWERTYUIOP";
const row2 = "ASDFGHJKL";
const row3 = "ZXCVBNM";

//Counter to allow for switches wordboxes and words
let i = 0;

//Created winning word
let winningWord = "HONOR";

//Captures which letter user presses and appends it to the appropriate word box
// var letterEntered = document.createElement("p");
// letterEntered.textContent = targetWord
// targetBox.appendChild(letterEntered)

//Creates digital keyboard
function buildLetters() {
  for (let i = 0; i < row1.length; i++) {
    let key = document.createElement("button");
    key.textContent = row1[i];
    key.classList = "letter";
    keyRow1.appendChild(key);
  }
  for (let i = 0; i < row2.length; i++) {
    let key = document.createElement("button");
    key.textContent = row2[i];
    key.classList = "letter";
    keyRow2.appendChild(key);
  }
  for (let i = 0; i < row3.length; i++) {
    let key = document.createElement("button");
    key.textContent = row3[i];
    key.classList = "letter";
    deleteButton.parentNode.insertBefore(key, deleteButton.nextSibling);
  }
}

buildLetters();
const letters = document.querySelectorAll(".letter");

//Fills boxes with letters that user enters
function fillBoxes() {
  for (let i = 0; i < wordBoxes.length; i++) {
    wordBoxes[i].innerHTML = "";
    for (let j = 0; j < 5; j++) {
      var letterBox = document.createElement("div");
      var letterEntered = document.createElement("p");
      letterEntered.textContent = words[i][j];
      letterBox.classList = "letter-box";
      letterBox.appendChild(letterEntered);
      wordBoxes[i].appendChild(letterBox);
    }
  }
}

//Captures letters pressed and adds them to current word up to word length of 5
function letterPress(letter) {
  if (targetWord.length < 5) {
    targetWord.push(letter);
  }
  fillBoxes();
}

//Deletes letters from current word
function deleteButtonPress() {
  targetWord.pop();
  fillBoxes();
}

//If current word is long enough, movse onto
function enterButtonPress() {
  let winCheck = targetWord.join("");
  if (winCheck == winningWord) {
    window.alert("You win!!!!");
  } else if (i === 5) {
    let playAgain = window.confirm("Nice Try! Play again?");
    if (playAgain) {
        location.reload()
    }
  } else if (targetWord.length === 5) {
    i++;
    targetWord = words[i];
    targetBox = wordBoxes[i];
  }
}

//Creates letter button functionality
letters.forEach((letter) => {
  letter.addEventListener("click", (event) => {
    letterPress(event.target.innerHTML.trim());
  });
});

//Creates letter button functionality
deleteButton.addEventListener("click", (event) => {
  deleteButtonPress();
});

//Creates letter button functionality
enterButton.addEventListener("click", (event) => {
  enterButtonPress();
});

//Fill word boxes with empty spaces or buttons
fillBoxes();
