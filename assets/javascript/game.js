// Create an array of words
var wordBank = ["daenarys", "dragons", "lannister", "kings", "winterfell", "joffrey"];

// Choose a word at random
var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	console.log(`The word is ${word}`)