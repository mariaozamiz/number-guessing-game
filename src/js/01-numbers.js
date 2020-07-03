'use strict';

//Access to HTML

const numberField = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const hintField = document.querySelector('.js-hint');
const attemptsField = document.querySelector('.js-attempts');

//Función num. aleatorio
let randomNumber;
function getRandomNumber(max) {
    randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}
console.log(getRandomNumber(100));

let attempts = 0;

function checkGuessNumber() {
    attempts++;
    let guessNumber = parseInt(numberField.value);
    if (guessNumber === randomNumber) {
        hintField.innerHTML = '¡Has ganado campeona!';
    } else if (guessNumber > 100 || guessNumber < 0) {
        hintField.innerHTML = 'El número que buscamos está entre 0 y 100';
    } else if (guessNumber > randomNumber) {
        hintField.innerHTML = 'Demasiado alto, prueba otra vez';
    } else if (guessNumber < randomNumber) {
        hintField.innerHTML = 'Demasiado bajo, prueba otra vez';
    }
    attemptsField.innerHTML = `${attempts}`;
}

button.addEventListener('click', checkGuessNumber());
