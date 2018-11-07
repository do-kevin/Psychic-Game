//Creating an array that holds all the alphabets.
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "y", "x", "z"];

//Variables to hold number of winds, losses, guesses left and so far.
var userWins = 0;
var userLosses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


//Variables that'll hold references (p tags)to places I want to display on 
//HTML document.
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("user-choice-text");
var computerChoiceText = document.getElementById("computer-choice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

// var guessesLeft = document.getElementById("guesses-left");
// var guessesSoFar = document.getElementById("guesses-so-far");
//   = guessesLeft ;
//     document.getElementById("guesses-so-far").textContent = guessesSoFar;

var guessesRemainding = document.getElementById("guesses-left");
var currentGuesses = document.getElementById("guesses-so-far");

var gunAudio = document.getElementById("myAudio");


//User presses a key that runs the function
document.onkeyup = function (event) {

    //Whatever key is pressed will be assigned to userGuess
    var userGuess = event.key;

    //Math.floor rounds # to nearest integer
    //Math.random returns a random #
    //Computer picks a (random) letter.
    var computerGuess = letter[Math.floor(Math.random() * letter.length)];


    if (userGuess === computerGuess) {
        userWins++;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    else {
        guessesLeft--;
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    // push() adds element(s) to end of array & returns new array length
    guessesSoFar.push(" " + userGuess);

    if (guessesLeft === 0) {
        userLosses++;
        guessesLeft = 9;
        guessesSoFar = [];
        gunAudio.play();
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
    }

    console.log("                                     ")
    console.log("########### Psychic Game ############")
    console.log(" User's Guess: " + userGuess);
    console.log(" Computer's Letter: " + computerGuess);
    console.log(" Guesses Left: " + guessesLeft);
    console.log(" Losses: " + userLosses + " times.");
    console.log(" Your Guesses so far: " + guessesSoFar);
    console.log("####################################");



    // Empty quotes makes var directionsText hide.
    directionsText.textContent = "";

    // var.textContent : set the text content of var?
    userChoiceText.textContent = "You typed ' " + userGuess + " '.";
    computerChoiceText.textContent = "He flips and reveals the card to have the letter ' " + computerGuess + " ' on it.";
    winsText.textContent = "You had guessed the right letter. The remaining members of your crew have survived " + userWins + " times.";
    lossesText.textContent = "You heard the hammer click and a deafening shot followed. You lost " + userLosses + " members.";
    guessesRemainding.textContent = "You have " + guessesLeft + " guesses left.";
    currentGuesses.textContent = "So far, you have guessed: " + guessesSoFar + ".";

}

//Anonymous Function

//function is set of parameters