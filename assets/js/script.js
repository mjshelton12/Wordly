const word1Box = document.getElementById('word-1-box')
const deleteButton = document.getElementById('delete')
const keyRow1 = document.getElementById('keys-row-1')
const keyRow2 = document.getElementById('keys-row-2')
const keyRow3 = document.getElementById('keys-row-3')

const word1 = []
const word2 = []
const word3 = []
const word4 = []
const word5 = []
const word6 = []

const row1 = "QWERTYUIOP"
const row2 = "ASDFGHJKL"
const row3 = "ZXCVBNM"

var letterEntered = document.createElement("p");
letterEntered.textContent = word1[0]
word1Box.appendChild(letterEntered)

function buildLetters() {
    for(let i=0; i<row1.length; i++){
        let key = document.createElement("button")
        key.textContent = row1[i]
        key.classList = "letter"
        keyRow1.appendChild(key)
    }
    for(let i=0; i<row2.length; i++){
        let key = document.createElement("button")
        key.textContent = row2[i]
        key.classList = "letter"
        keyRow2.appendChild(key)
    }
    for(let i=0; i<row2.length; i++){
        let key = document.createElement("button")
        key.textContent = row3[i]
        key.classList = "letter"
        keyRow3.appendChild(key)
    }
}

buildLetters()
const letters = document.querySelectorAll('.letter')

function fillBoxes() {
    word1Box.innerHTML = ""
    for(let i=0; i<5; i++){
        var letterBox = document.createElement("div")
        var letterEntered = document.createElement("p");
        letterEntered.textContent = word1[i]
        letterBox.classList = "letter-box"
        letterBox.appendChild(letterEntered)
        word1Box.appendChild(letterBox)
    }
}

function letterPress(letter){
    if(word1.length < 5){
        console.log(letter)
        word1.push(letter)
        console.log(word1)
    }
    fillBoxes()
}

function deleteButtonPress(){
    word1.pop()
    fillBoxes()
}

letters.forEach(letter => {

    letter.addEventListener('click', event => {
         letterPress( event.target.innerHTML.trim() );
    });
 
 });

 deleteButton.addEventListener("click", event => {
    deleteButtonPress()})

 fillBoxes()
