const letters = document.querySelectorAll('.letter')
const word1Box = document.getElementById('word-1-box')

const word1 = ["", "", "", "", ""]
const word2 = []
const word3 = []
const word4 = []
const word5 = []
const word6 = []

var letterEntered = document.createElement("p");
letterEntered.textContent = word1[0]
word1Box.appendChild(letterEntered)

function fillBoxes() {
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
    if(word1.length < 10){
        console.log(letter)
        word1.unshift(letter)
        console.log(word1)
    }
}

letters.forEach(letter => {

    letter.addEventListener('click', event => {
         letterPress( event.target.innerHTML.trim() );
    });
 
 });

 fillBoxes()