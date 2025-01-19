// computer generates a random Number
// user enters a guess
// if the guess = the Number, user wins
// if the guess does not = the guess user goes again, a nax of two times


"use strict";

const guessElement = document.getElementById("guess-message");
const currentElement = document.getElementById("current-guess");
const computerElement = document.getElementById("computer-guess");
const historyElement = document.getElementById("guess-history");
const inputNumElement = document.getElementById("guess-inpu")

// Number Generation/Computer Guess
function generatedNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//Guess Function



 function render() {
    // Call the created functions
    generatedNumber (0, 100);
}

submissionBtn.addEventListener("click", function () {
    render();
});

let clear = document.getElementById("restart-btn")
clear.addEventListener("click", function(){
  expression = "0"
  displayValue()
})