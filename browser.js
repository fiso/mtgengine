var Game = require("./engine/Game");
var Constants = require("./engine/Constants");
var Inputs = require("./engine/Inputs");
var Outputs = require("./engine/Outputs");

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

function processInputs () {
	try {
		game.tick();
	} catch (e) {
		if (e instanceof Game.GameOver) {
			console.log("Game over.");
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
	window.game = new Game.Game(2, 0);

	document.getElementById("player0-pass").addEventListener("click", function () {
		game._players[0].addInput(Inputs.PASS_PRIORITY, {});
		processInputs();
	});
	document.getElementById("player1-pass").addEventListener("click", function () {
		game._players[1].addInput(Inputs.PASS_PRIORITY, {});
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
        		window.game._hasPriority.addInput(Inputs.PASS_PRIORITY, {});
				processInputs();
        		break;
        }
	});

	processOutputs();
}
