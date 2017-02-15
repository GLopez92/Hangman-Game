
var userGuesses = ["santana", "beatles", "deadman"];
var pictures = ["beatles.jpg" , "santana.jpg", "deadman.jpg" ];

var chosenWord = "";
var letterInChosenWord = [];
var generateBlanks = 0;
var compchooses = [];
var wrongGuesses = [];

var win = 0;
var losses = 1;
var numGuesses = 9;

console.log("level1");

function begin(){

	numGuesses = 9;
	compchooses = [];
	wrongGuesses = [];


	random = userGuesses[Math.floor(Math.random() * userGuesses.length)];
	letterInChosenWord = random.split("");
	generateBlanks = letterInChosenWord.length;

	console.log(random);
	console.log(generateBlanks);

	for(var i = 0; i < generateBlanks; i++){
		compchooses.push("_")
	}

	console.log(compchooses);
	document.getElementById('changer').innerHTML = compchooses.join(" ");
	document.getElementById('guess-counter').innerHTML = numGuesses;
	

};

console.log("level2");

function guessChecker(letter){

	var letterInWord  = false;

	for(var i = 0; i < generateBlanks; i++){
		if(chosenWord[i] === letter){
			letterInWord = true;
		}
	}
	if(letterInWord){
		for(var i = 0; i < generateBlanks; i++){
		if(chosenWord[i] === letter){
			compchooses[i] == letter;
		}
		console.log("inside our guessChecker function", compchooses);
		}
	}else{
		numGuesses --;
		wrongGuesses.push(letter);
	}

	console.log("our wrong guesses in guessChecker function", wrongGuesses);
	
	
};


console.log("level3");

function complete(){


	document.getElementById("changer").innerHTML = compchooses.join(" ");
	document.getElementById('guess-counter').innerHTML = numGuesses;
	document.getElementById('guess-tracker').innerHTML = wrongGuesses.join(" ");
	// document.getElepicmentById('pic').innerHTML = pictures.join(" ");

	

	// if(compchooses.indexof(letter >= 1)){
	// 	cosole.log(letter)
	// }


	if (letterInChosenWord.join(" ") === compchooses.join(" ")){
		win++;
		alert("you win!!");
		document,getElementById('win').innerHTML = win;
		wrongGuesses = [];
		begin();
	}else if(numGuesses === 0){
		document.getElementById('losses').innerHTML = losses++;
		alert("Try Again");
		wrongGuesses = [];
		begin();



	}

};


begin();
document.onkeyup = function(event){

	var usersPick = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("this is the letter we typed", usersPick);
	guessChecker(usersPick);
	complete();

};




