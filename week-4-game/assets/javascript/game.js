// GLOBAL VARIABLES
//--------------------------------------------------------------------------

// Crystal Variables 
var crystal = {
	blue:
	{
		name: "Blue",
		value: 0
	},
	green:
	{
		name: "Green",
		value: 0
	},
	red:
	{
		name: "Red",
		value: 0
	},
	yellow:
	{
		name: "Yellow",
		value: 0
	}
};

var currentScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
//--------------------------------------------------------------------------
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
} 


var startGame = function() {

	// Reset score
	currentScore = 0;

	// New target
	targetScore = getRandom(19, 120);

	// Crystal values
	crystal.blue.value = getRandom(1, 12);
	crystal.green.value = getRandom(1, 12);
	crystal.red.value = getRandom(1, 12);
	crystal.yellow.value = getRandom(1, 12);


	// HTML changes
	$('#yourScore').html(currentScore);
	$('#targetScore').html(targetScore);

	// Testing & Debugging
	console.log("Target Score: " + targetScore);
	console.log("Blue: " + crystal.blue.value + " | Greed: " + crystal.green.value + " | Red: " + crystal.red.value + " | Yellow: " + crystal.yellow.value);
}

// Respond to Crystal Clicks 
var addValues = function(crystal) {
	currentScore = currentScore + crystal.value;

	$('#yourScore').html(currentScore);

	checkWin();

	console.log("Your Score: " + currentScore);
}

// Check if user won or lost and reset the game
var checkWin = function() {
	if (currentScore > targetScore) {
		alert("Sorry, you lost!");
		console.log("You lost");
		lossCount++;
		$('#lossCount').html(lossCount);

		startGame();
	}

	else if (currentScore == targetScore) {
		alert("Congratulations, you won!");
		console.log("You won");
		winCount++;
		$('#winCount').html(winCount);

		startGame();
	}
}



// MAIN PROCESS
//--------------------------------------------------------------------------

startGame();

$('#blue').click(function() {
	addValues(crystal.blue);
});

$('#green').click(function() {
	addValues(crystal.green);
});

$('#red').click(function() {
	addValues(crystal.red);
});

$('#yellow').click(function() {
	addValues(crystal.yellow);
});



