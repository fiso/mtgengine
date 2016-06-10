"use strict";
const Game = require("./src/Game");
const Constants = require("./src/Constants");
const Inputs = require("./src/Inputs");
const Outputs = require("./src/Outputs");
const Deck = require("./src/Deck");

const kikiChordList =
`1 Fire-Lit Thicket
2 Forest
1 Ghost Quarter
1 Horizon Canopy
1 Mountain
1 Overgrown Tomb
1 Plains
1 Raging Ravine
2 Razorverge Thicket
1 Sacred Foundry
2 Stomping Ground
1 Temple Garden
4 Windswept Heath
4 Wooded Foothills
4 Birds of Paradise
4 Chord of Calling
2 Courser of Kruphix
2 Eternal Witness
1 Fulminator Mage
1 Kiki-Jiki, Mirror Breaker
1 Lone Missionary
1 Orzhov Pontiff
4 Path to Exile
2 Pia and Kiran Nalaar
1 Qasali Pridemage
3 Restoration Angel
1 Reveillark
1 Scavenging Ooze
1 Spellskite
2 Voice of Resurgence
3 Wall of Omens
2 Wall of Roots
1 Worship
Sideboard:

1 Big Game Hunter
1 Dismember
1 Eidolon of Rhetoric
1 Fulminator Mage
3 Lightning Helix
1 Obstinate Baloth
1 Phyrexian Revoker
1 Reclamation Sage
1 Scavenging Ooze
1 Sin Collector
1 Spellskite
2 Stony Silence`;

const monoredList =
`40 Mountain
20 Lightning Bolt
Sideboard:

15 Goblin Bully`;

function handleNewTime (data) {
	document.getElementById("turn-number").innerHTML = data.turnNumber;
	document.getElementById("active-player-name").innerHTML = data.activePlayer._guid.replace("_", " ");
	var turnIndicator = document.getElementById("turn-indicator");
	turnIndicator.className = "";
	turnIndicator.classList.add("active-phase-" + data.stepName.replace("_", "-").toLowerCase());
}

function handlePriorityChanged (data) {
	var priorityIndicator = document.getElementById("game-container");
	priorityIndicator.className = "";
	priorityIndicator.classList.add("has-priority-" + data.player._guid.replace("_", "").toLowerCase());
}

function handleObjectEnteredZone (data) {
	var obj = data.object;
	switch (obj._zone._id) {
		case Constants.zoneIdentifiers.HAND:
			var image = new Image();
			image.id = obj._guid;
			image.classList.add("card");
			image.src = obj._imageUrl;
			document.getElementById(obj._zone._owner._guid.replace("_", "") + "-zone-hand").appendChild(image);
			break;
		case Constants.zoneIdentifiers.GRAVEYARD:
			var card = document.getElementById(obj._guid);
			document.getElementById(obj._zone._owner._guid.replace("_", "") + "-zone-graveyard").appendChild(card);
			break;
		default:
			console.log("Object entered zone " + obj._zone._id + " and we can't handle that");
			break;
	}
}

function handleGameOver (winner) {
	if (!winner) {
		alert("The game is a draw");
	} else {
		alert(`${winner._guid} has won the game`);
	}
	window.location.reload();
}

function processInputs () {
	try {
		game.tick();
	} catch (e) {
		if (e instanceof Game.GameOver) {
			console.log("Game over.");
			handleGameOver(e.winner);
			return;
		} else {
			throw e;
		}
	}

	processOutputs();
}

function processOutputs() {
	var outputs = game.getOutputs();

	if (outputs.length > 0) {
		var output;
		while (output = outputs.shift()) {
			switch (output.output) {
				case Outputs.NEW_GAME_TIME:
					handleNewTime(output.data);
					break;
				case Outputs.PRIORITY_CHANGED:
					handlePriorityChanged(output.data);
					break;
				case Outputs.OBJECT_ENTERED_ZONE:
					handleObjectEnteredZone(output.data);
					break;
				default:
					console.log("Unhandled output: " + output.output);
			}
		}
	}
}

window.startGame = function () {
	let game = new Game.Game(2, 0, false,
		[new Deck.Deck(new Deck.StringLoader(kikiChordList)),
		 new Deck.Deck(new Deck.StringLoader(monoredList))]);
	window.game = game;

	game.ready().then(() => {
		document.addEventListener("contextmenu", function (event) {
			event.preventDefault();
			return false;
		});
		document.getElementById("player0-pass").addEventListener("click", function () {
			let input = Inputs.PASS_PRIORITY;
			if (game._waitingForChoice) {
	      input = Inputs.FINISH_CHOICE;
	    }
			game._players[0].addInput(input, {});
			processInputs();
		});
		document.getElementById("player1-pass").addEventListener("click", function () {
			let input = Inputs.PASS_PRIORITY;
			if (game._waitingForChoice) {
	      input = Inputs.FINISH_CHOICE;
	    }
			game._players[1].addInput(input, {});
			processInputs();
		});
		document.getElementById("player0-concede").addEventListener("click", function () {
			game._players[0].addInput(Inputs.CONCEDE, {});
			processInputs();
		});
		document.getElementById("player1-concede").addEventListener("click", function () {
			game._players[1].addInput(Inputs.CONCEDE, {});
			processInputs();
		});
		document.addEventListener("keydown", function (event) {
	    event = event || window.event;
	    switch (event.keyCode) {
	    	case 32: // SPACE
					window.game.passOrFinishChoice();
					processInputs();
	    		break;
	    }
		});
		processOutputs();
	});
}
