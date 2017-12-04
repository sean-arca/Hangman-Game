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
var userText = document.getElementById("entered");

// Run this function when key is pressed
document.onkeyup = function(event) {
	userText.innerHTML = event.key;
	lettersChosen.push(userText);
	// $("#entered").append(lettersChosen);
}