// This is the random number generator 

let randomNumber = Math.floor(Math.random() * 10) + 1;

// Assigning value to constants and variables that will be used

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const submitNumber = document.querySelector('.submitNumber');

let countAttempt = 1;
let resetGame;
guessField.focus();

// This is where we run the code to make the game workas it should

function guessCheck() {
    const playerGuess = Number(guessField.value);
    if (countAttempt === 1) {
        guesses.textContent = 'Previous Guesses: '; // This creates a text "Previous Guesses"
    }
    guesses.textContent += `${playerGuess} `; // This maps the last guess to Previous Guesses

    if (playerGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You just won this challenge';
        lastResult.style.backgroundColor = 'green'; // This tells us if we won the challenge
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (countAttempt === 5) {
        lastResult.textContent = 'You Lose! GAME OVER!!!'; // This tells us if we have ran out of options
        lowOrHi.textContent = '';
        setGameOver();
    }
    else {
        lastResult.textContent = 'Wrong! Try Again!';
        lastResult.style.backgroundColor = 'red';
        if (playerGuess < randomNumber) {
            lowOrHi.textContent = 'The number you guess was low!'; // This tells us if we our guess is too low
        }
        else if (playerGuess > randomNumber) {
            lowOrHi.textContent = 'The number you guess was High'; // This tells us if our guess is too high
        }
    }

    countAttempt++;
    guessField.value = '';
    guessField.focus();
}

// This event listener runs when we click the Submit button

submitNumber.addEventListener('click', guessCheck);

// This is the functionality for setGameOver and reset/restart

function setGameOver() {
    guessField.disabled = true;
    submitNumber.disabled = true;
    resetGame = document.createElement('button');
    resetGame.textContent = 'Begin New Game';
    document.body.append(resetGame);
    resetGame.addEventListener('click', startOver);
}

// This is the button that reset the game

function startOver() {
    countAttempt = 1;


const resetParas = document.querySelectorAll('.resultParas p');
for (const resetPara of resetParas) {
    resetPara.textContent = '';
}

resetGame.parentNode.removeChild(resetGame);

guessField.disabled = false;
submitNumber.disabled = false;
guessField.value = '';
guessField.focus();

lastResult.style.backgroundColor = 'white';

randomNumber = Math.floor(Math.random() * 10) + 1;
}
