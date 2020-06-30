'use strict';

//Acceder al HTML

const numberField = document.querySelector('.js-input');
const numberGuess = numberField.value;
const button = document.querySelector('.js-button');
const hintField = document.querySelector('js-hint');
const hintText = hintField.innerHTML;
const attemptsField = document.querySelector('js-attempts');
const attemptsNumber = attemptsField.innerHTML;
