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
	placeHolders.push("_ ");
}

// Append or Insert the content of the ${placeHolders} array into the #guessWord element.
$("#guessWord").append(placeHolders);

// Target where to display letterschosen(on key up)
var lettersChosen = [];

// Run this function when key is pressed
document.onkeydown = function(event) {

	// Display letter pressed in div id [NEED TO CHANGE TO DISPLAY ARRAY]
	document.getElementById("entered").innerHTML = event.key;
	// Push letter pressed into letterChosen array
	lettersChosen.push(event.key);

	// If/else if letter pressed matches word

		// (If) match then change placeholder text to letter

		// (Else If) no match subtract from chances left and display on #tries-left span

		// (Else) lose if lives = 0
}




