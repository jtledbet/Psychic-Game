

// Initialize alphabet options:
var computerChoices = "abcdefghijklmnopqrstuvwxyz";
computerChoices = computerChoices.split("")

// Stats declaration:
var wins = 0
var losses = 0
var guessed = ""
var totalGuesses = 10
var guessesRem = totalGuesses
guessesNow.innerHTML = ("Guesses remaining: " + guessesRem)

// Computer picks a letter:
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// When a key is pressed:
document.onkeyup = function (event) {

// Determines which key was pressed:
var userGuess = event.key;
// Converts to lcase:
userGuess = userGuess.toLowerCase();

console.log("computerGuess: " + computerGuess);
console.log("userGuess: " + userGuess);

console.log(computerChoices.indexOf(userGuess));

// Making sure user input is a letter of the alphabet:
if (computerChoices.indexOf(userGuess) != (-1)) {
    console.log("submitting guess!")
    submitGuess(userGuess);
    }

}

function submitGuess(userGuess) {

    console.log("inside the function!")
    console.log(userGuess + " --- " + computerGuess)
    console.log(userGuess === computerGuess)

    // Add current guess to guessed list:
    guessed = guessed + userGuess
    guessesRem--

    if (userGuess === computerGuess) {
        prompts.innerHTML = ("That is correct!" + "<br>The letter was " + userGuess + ".")
        wins++
        winsNow.innerHTML = ("Wins: " + wins)
        newLetter()
        guessesRem = totalGuesses
    } else {
        prompts.innerHTML = ("Incorrect!" + "<br> Please try again.");
        
    }

    if (guessesRem <= 0) {
        prompts.innerHTML = "All out of guesses!"
        losses++
        lossesNow.innerHTML = ("Losses: "+ losses)
        
        resetGame()
        // retry = confirm("Would you like to play again?")
        // if (retry) {
        //     resetGame()
        // } else {
        //     instructions.innerHTML("Sorry to see you go.")
        // }
    }

    // Rally the stats:
    guessesNow.innerHTML = ("Guesses remaining: " + guessesRem)
    guessedSoFar.innerHTML = ("Guesssed so far: " +guessed)
}

function newLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    instructions.innerHTML = "New letter! Guess what letter I'm thinking of."
}

function resetGame() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //guessesRem = prompt("How many guesses would you like?");
    guessesRem = 10
    guessed = ""
}