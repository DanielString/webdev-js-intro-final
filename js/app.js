// computer generates a random Number
// user enters a guess
// if the guess = the Number, user wins
// if the guess does not = the guess user goes again, a nax of two times


"use strict";

const guessElement = document.getElementById("guess-message");
const currentElement = document.getElementById("current-guess");
const computerElement = document.getElementById("computer-guess");
const historyElement = document.getElementById("guess-history");
const inputNumElement = document.getElementById("guess-input")
const submitElement = document.getElementById("submit-btn")
const clearElement = document.getElementById("restart-btn")

// Number Generation/Computer Guess
function generatedNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Guess Function
function userGuess() {
  currentElement.innerText = inputNumElement.name;
}

//Logic
let tries = 0
while (count < 4){
  function logic() {
    if (currentElement = computerElement) {
      guessElement.innerText = "You got it!!!"
    } else {
      guessElement.innerText = "Try Again"
    }
  }
  tries++
}


function render() {
  generatedNumber(1, 10);
  userGuess();
}

submitElement.addEventListener("click", function () {
  // Update this function
  render();
});