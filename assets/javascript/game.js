// Set variables
var wordBank = ["Daenarys", "Dragons", "White Walkers", "John Snow", "Red Wedding"];
var wordChosen = [];
var guesses = 6;
var userText = document.getElementById("entered");
var userTry = document.getElementById("tries-left");


// List the words available in the wordbank
for (var i = 0; i < wordBank.length; i++) {
    
	// Choose a word at random
	var wordChoices = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(wordChoices);

	// Split the word chosen
    var wordSplit = wordChoices.split("");
    console.log(wordSplit);

    // For every letter, replace with "_"
}


// Run this function when a key is pressed
document.onkeyup = function(event) {

	// Determines which key is pressed
    userText.textContent = event.key;

    // Push the letter used into an array and display .push()

    // Display how many attempts left (use attempts div)

};

// Function to 



// Function to go to next word when word is guessed (use confirm?)