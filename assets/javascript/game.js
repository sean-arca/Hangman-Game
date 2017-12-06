// Create an array of words
var wordBank = ["daenarys", "rhaegar", "targaryen", "dragons", "lannister", "kings", "winterfell", "joffrey", "tyrion", "sansa", "arya", "stark"];

// Choose a word at random
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(`The word is ${word}`)

// Create empty arrays for the chosen word and for the placeholder. 
var placeHolders = [];
var ourWord = [];

// Create loop that targets the ${word} by length. 
for (var i = 0; i < word.length; i++) {
	// Push the ${word}'s letters into the ${ourWord} array.
	ourWord.push(word[i]);
	// Push the amount of ${word}'s letters into the ${placeHolders} array but replaces it with "_ ".
	placeHolders[i] = "_ ";
}

// Append or Insert the content of the ${placeHolders} array into the #guessWord element.
$("#guessWord").append(placeHolders);

// Target where to display letterschosen(on key up)
var lettersChosen = [];

// Set amount of lives and remaining letters
var triesLeft = document.getElementById("tries-left");
triesLeft.innerHTML = 6;
tries = 6;
var lettersRemain = word.length;

// Run this function when key is pressed
document.onkeyup = function (event) {

	// Display letter pressed in #entered div
	lettersChosen.push(event.key);
	document.getElementById("entered").innerHTML = lettersChosen;	
	console.log("Key Pressed");
	console.log(lettersChosen);
	
	// For loop to do comparison instead
	for (var position = 0; position < ourWord.length; position++) {
		
		if (ourWord[position] === event.key) {
			placeHolders[position] = event.key;
			document.getElementById("guessWord").innerHTML = placeHolders.join("");
			lettersRemain--;
		}
	}



	var isWrong = function () {
		if (ourWord[position] !== event.key) {
			alert("wrong!");
		}	
	}



	// else if (lettersChosen[i] !== ourWord[i]) {
	// 	
	// 	console.log("Not a match");

	// if no letters match, by the end of the loop subtract from chances left
	// .join to get rid of commas

	// // }
	// lettersRemain--;
	// If no match subtract from chances left and display on #tries-left span
	var notMatch;

	// Game Reset
	

	// Winning condition
	if (lettersRemain === 0) {
		alert("You heard " + ourWord.join(""));

		var playAgain = confirm("Do you hear something else?");
		if (playAgain === true) {
			window.location.reload(true);
		}
	}

	


	// (If) lose if lives = 0
	if (tries <= 0 && lettersRemain >= 1) {
		document.write(`<h1 style="font-family:Playfair Display; font-size:3em; font-weight:200; position:absolute; right:100px; top:100px">You lose consciousness for a moment and suddenly..</h1><br><img src="./assets/images/end.gif" style="position:absolute; right:100px; top: 300px; width: 500px; height:auto;">`);
		setTimeout(function() {
			window.location.reload(true);
		  },"10000");
	}
}