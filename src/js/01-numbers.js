'use strict';

//Access to HTML
const numberField = document.querySelector('.js__input');
const button = document.querySelector('.js__button');
const hintField = document.querySelector('.js__hint');

//Create a random number
let randomNumber;
function getRandomNumber(max) {
    randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}

// Check guess number
let guessNumber;
function checkGuessNumber(ev) {
    ev.preventDefault();
    guessNumber = parseInt(numberField.value);
    if (!guessNumber) {
        hintField.innerHTML = 'Venga, ¡escribe un número!';
    } else {
        counterUp(ev);
        printMessage(guessNumber);
    }
}

// Increment counter
let attempts = 0;
function counterUp() {
    const attemptsField = document.querySelector('.js__attempts');
    attempts++;
    attemptsField.innerHTML = `${attempts}`;
}

function printMessage() {
    if (guessNumber === randomNumber) {
        hintField.innerHTML = '🎉¡HAS ACERTADO! 🎉';
    } else if (guessNumber > 100 || guessNumber < 0) {
        hintField.innerHTML = '¡Pista! El número está entre 0 y 100';
    } else if (guessNumber > randomNumber) {
        hintField.innerHTML = 'Demasiado alto, prueba otra vez';
    } else if (guessNumber < randomNumber) {
        hintField.innerHTML = 'Demasiado bajo, prueba otra vez';
    }
}

//Function calling
getRandomNumber(100);

//Event listener
button.addEventListener('click', checkGuessNumber);
