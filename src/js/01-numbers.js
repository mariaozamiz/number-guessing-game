'use strict';

//Access to HTML

const numberField = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const hintField = document.querySelector('js-hint');
//const hintText = hintField.innerHTML;
const attemptsField = document.querySelector('js-attempts');
//const attemptsNumber = attemptsField.innerHTML;

//Función num. aleatorio
let randomNumber;
function getRandomNumber(max) {
    randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}
console.log(getRandomNumber(100));

//Función comparar
function checkGuessNumber() {
    let guessNumber = parseInt(numberField.value);
    console.log(`Esto es lo que he escrito ${numberField.value}`);
    console.log(`Este es el número aleatorio: ${randomNumber}`);
    console.log(guessNumber);
    console.log(randomNumber);
    if (guessNumber === randomNumber) {
        console.log('¡HURRA!');
    }
}

button.addEventListener('click', checkGuessNumber);
