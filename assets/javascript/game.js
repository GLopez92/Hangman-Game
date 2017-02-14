var userguess = [ 
['s','a', 'n','t','a','n','a'],
['b','e','a','t','l','e','s'],
['d','e','a','d','m','a','n'] 
];

var random = Math.floor((Math.random()*(userguess.length-1)));

var compchooses = userguess['random'];
var generate = new Array(compchooses);
var error = 0;

for(var i = 0; i < generate.length; i++){

	generate[i] = "_ ";

};

function printGenerate(){
	for (var i = 0; i < generate.length; i++){
		var gameboard = document.getElementById("gameboard");
		var invisibleletter = document.createElement("div");
		invisibleletter.innerHTML = generate[i];
		gameboard.appendChild(invisibleletter);
	};
}


var guessChecker = function(){

	var replacer = document.changer;
	var checker = replacer.elements["gameparts"];
	var userpick = checker.value;

	userpick = userpick.toLowerCase();
	
	for(var i = 0; i < compchooses.length; i++){
		if(compchooses[i] === userpick){
			generate[i] = userpick + " ";
			var rightchoose = true;
		}

	checker.value = " ";
	}

}

printGenerate();
guessChecker();