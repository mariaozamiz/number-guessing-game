'use strict';

//Access to HTML
const numberField = document.querySelector('.js__input');
const button = document.querySelector('.js__button');

//Create a random number
let randomNumber;
function getRandomNumber(max) {
    randomNumber = Math.ceil(Math.random() * max);
    return randomNumber;
}

// Check guess number field
let guessNumber;
function checkGuessNumber(ev) {
    ev.preventDefault();
    guessNumber = parseInt(numberField.value);
    if (!guessNumber) {
        updateHint('Venga, ¡escribe un número!');
    } else {
        counterUp();
        printMessage(guessNumber);
    }
}

// Print message
function printMessage() {
    if (guessNumber === randomNumber) {
        updateHint('🎉¡HAS ACERTADO! 🎉');
    } else if (guessNumber > 100 || guessNumber < 0) {
        updateHint('¡Pista! El número está entre 0 y 100');
    } else if (guessNumber > randomNumber) {
        updateHint('Demasiado alto, prueba otra vez');
    } else if (guessNumber < randomNumber) {
        updateHint('Demasiado bajo, prueba otra vez');
    }
}

// Update hint
function updateHint(text) {
    const hintField = document.querySelector('.js__hint');
    hintField.innerHTML = text;
}

// Increment counter
let attempts = 0;
function counterUp() {
    const attemptsField = document.querySelector('.js__attempts');
    attempts++;
    attemptsField.innerHTML = `${attempts}`;
}

//Event listener
button.addEventListener('click', checkGuessNumber);

//Function calling
getRandomNumber(100);
