const word1Box = document.getElementById('word-1-box')
const word2Box = document.getElementById('word-2-box')
const word3Box = document.getElementById('word-3-box')
const word4Box = document.getElementById('word-4-box')
const word5Box = document.getElementById('word-5-box')
const word6Box = document.getElementById('word-6-box')
const deleteButton = document.getElementById('delete')
const enterButton = document.getElementById('enter')
const keyRow1 = document.getElementById('keys-row-1')
const keyRow2 = document.getElementById('keys-row-2')
const keyRow3 = document.getElementById('keys-row-3')

const wordBoxes = [word1Box, word2Box, word3Box, word4Box, word5Box]

let targetBox = word1Box

const word1 = []
const word2 = []
const word3 = []
const word4 = []
const word5 = []
const word6 = []

const words = [word1, word2, word3, word4, word5]
let targetWord = word1

const row1 = "QWERTYUIOP"
const row2 = "ASDFGHJKL"
const row3 = "ZXCVBNM"

let i = 0

var letterEntered = document.createElement("p");
letterEntered.textContent = targetWord
targetBox.appendChild(letterEntered)

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
    for(let i=0; i<row3.length; i++){
        let key = document.createElement("button")
        key.textContent = row3[i]
        key.classList = "letter"
        deleteButton.parentNode.insertBefore(key, deleteButton.nextSibling)
    }
}

buildLetters()
const letters = document.querySelectorAll('.letter')

function fillBoxes() {
    for(let i=0; i<wordBoxes.length; i++){
        wordBoxes[i].innerHTML = ""
        for(let j=0; j<5; j++){
            var letterBox = document.createElement("div")
            var letterEntered = document.createElement("p");
            letterEntered.textContent = words[i][j]
            letterBox.classList = "letter-box"
            letterBox.appendChild(letterEntered)
            wordBoxes[i].appendChild(letterBox)
            }
        }
}

function letterPress(letter){
    if(targetWord.length < 5){
        targetWord.push(letter)
    }
    fillBoxes()
}

function deleteButtonPress(){
    word1.pop()
    fillBoxes()
}

function enterButtonPress(){
    if(targetWord.length === 5){
        i++
        targetWord=words[i]
        targetBox=wordBoxes[i]
        console.log(targetWord)
    }
}

letters.forEach(letter => {

    letter.addEventListener('click', event => {
         letterPress( event.target.innerHTML.trim() );
    });
 
 });

deleteButton.addEventListener("click", event => {
    deleteButtonPress()})

enterButton.addEventListener("click", event => {
    enterButtonPress()})

 fillBoxes()
