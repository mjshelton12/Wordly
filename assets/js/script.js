const letters = document.querySelectorAll('.letter')

console.log("connected")

function letterPress(letter){
    console.log("button", letter)
}

letters.forEach(letter => {

    letter.addEventListener('click', event => {
         console.log( event.target.innerHTML.trim() );
    });
 
 });