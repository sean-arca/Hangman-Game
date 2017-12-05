// Create an array of words
var wordBank = ["daenarys", "dragons", "lannister", "kings", "winterfell", "joffrey"];

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
	// Winning condition
	if (placeHolders.indexOf("_ ") === -1) {
		document.write(`<h1 style="font-family:Playfair Display; font-size:3em; font-weight:200; position:absolute; right:100px; top:100px">You heard ${ourWord}.</h1>`);
	}
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
document.onkeyup = function(event) {

	// Display letter pressed in #entered div
	document.getElementById("entered").innerHTML = lettersChosen;
	lettersChosen.push(event.key).toString();
	console.log("Key Pressed");
	console.log(lettersChosen);
	
	// For loop to do comparison instead
	for (var j = 0; j < ourWord.length; j++) {
		if (ourWord[j] === lettersChosen) {
			placeHolders.push(`${ourWord}[i]`) = lettersChosen;
		}
		
	}



	// // If/else if letterChosen matches ourWord array
	// if (lettersChosen.indexOf() === ourWord.indexOf()) {
	// 	// (If) match then change placeholder text to letter (user indexOf)
	// 	console.log("That letter matches");

	// }

	// // (Else) no match subtract from chances left and display on #tries-left span
	// if (lettersChosen[i] !== ourWord[i]) {
	// 	triesLeft.innerHTML--;
	// 	tries--;
	// 	console.log("Not a match");
	// }

	// (If) lose if lives = 0
	if (tries === 0) {
		document.write(`<h1 style="font-family:Playfair Display; font-size:3em; font-weight:200; position:absolute; right:100px; top:100px">You have lost consciousness.</h1>`);
		setTimeout(function() {
			window.location.reload(true);
		  },"1500");
	}
}