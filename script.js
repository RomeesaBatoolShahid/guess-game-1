var secretNumber;
var maxNumber;
var attempts = 0;
var maxAttempts;

function setLevel() {
    var level = document.getElementById('levelSelect').value;
    attempts = 0; // Reset attempts
    document.getElementById('resultMessage').textContent = ''; // Clear any previous message
    document.getElementById('guessInput').disabled = false; // Enable input if disabled

    if (level === 'easy') {
        maxNumber = 50;
        maxAttempts = 10;
    } else if (level === 'medium') {
        maxNumber = 100;
        maxAttempts = 7;
    } else if (level === 'hard') {
        maxNumber = 200;
        maxAttempts = 5;
    }

    // Generate a new secret number for the selected level
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    document.getElementById('instructions').textContent = 'Guess a number between 1 and ' + maxNumber + '.';
}

function makeGuess() {
    var guessInput = document.getElementById('guessInput');
    var guess = parseInt(guessInput.value, 10);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        document.getElementById('resultMessage').textContent = "Please enter a valid number between 1 and " + maxNumber + ".";
        return;
    }

    if (guess === secretNumber) {
        document.getElementById('resultMessage').textContent = "Congratulations! You guessed the number in " + attempts + " attempts.";
        guessInput.disabled = true;
    } else if (guess < secretNumber) {
        document.getElementById('resultMessage').textContent = "Too low! Try again.";
    } else {
        document.getElementById('resultMessage').textContent = "Too high! Try again.";
    }

    if (attempts >= maxAttempts && guess !== secretNumber) {
        document.getElementById('resultMessage').textContent = "Game over! You've reached the maximum attempts. The correct number was " + secretNumber + ".";
        guessInput.disabled = true;
    }

    guessInput.value = ''; // Clear the input field
}

// Initialize the game to the 'easy' level by default
setLevel();
