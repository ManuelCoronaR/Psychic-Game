let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let wins = 0;
let loses = 0;
let gLeft = 9;
let soFar = [];
let count = 0;
alert("Welcome to The Psychic Game!");
alert("Are you ready?");
alert("What's your GUESS? Press any letter.");

let compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function () {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (gLeft === 0) {
        loses++;
        document.getElementById('lss').innerHTML = loses;
        alert("Sorry,not a match. Computer say: " + compGuess);
        gLeft = 9;
        document.getElementById('gLeft').innerHTML = left;
        compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    else if (compGuess != userGuess) {
        gLeft--;
        document.getElementById('gLeft').innerHTML = gLeft;
        soFar[count] = userGuess;
        document.getElementById('soFar').innerHTML = soFar;
        count++;
    }
    else {
        wins++;
        document.getElementById('wn').innerHTML = wins;
        alert("You guessed it, you won!: " + compGuess);
        gLeft = 9;
        document.getElementById('gLeft').innerHTML = gLeft;
        compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        

    }
}





