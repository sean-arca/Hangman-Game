// Set variables
var wordBank = ["Daenarys", "Dragons", "White Walkers", "John Snow", "Red Wedding"];
var wordLetters = [];
var letterChosen = [];
var guesses = 6;
var userText = document.getElementById("entered");
var wordChosen = document.getElementById("guessWord");
var userTry = document.getElementById("tries-left");


// Run this function when a key is pressed
document.onkeyup = function(event) {

	// Determines which key is pressed
    userText.textContent = event.key;

	// List the words available in the wordbank
	for (var i = 0; i < wordBank.length; i++) {
    
		// Choose a word at random
		var wordChoices = wordBank[Math.floor(Math.random() * wordBank.length)];
		console.log(wordChoices);

		// Split the word chosen and push into array
    	var wordSplit = wordChoices.split("");
    	wordLetters.push(wordSplit);
    	wordChosen.innerText = wordLetters
    	console.log(wordSplit);

   		// For every letter, replace with "_" Look at drinkslist example for createElement (use span on html for "_")

   		//Subtract a Guess
   		guesses--
	}
};



    // Push the letter used into an array and display .push()

    // Display how many attempts left (use attempts div)



// Function to 



// Function to go to next word when word is guessed (use confirm?)



/* Game Design:

1. Pick a random word
2. Take the player's guess
3. Quit the game if player wants to
4. Check that the player's guess is a valid answer
5. Keep track of letters guessed
6. Show player progress
7. Finish when player guessed the word





