var Player = require("./Player");
var Constants = require("./Constants");
var _ = require("underscore");
var Battlefield = require("./zones/Battlefield");

var GameOver = function (winner) {
	this.winner = winner;
};

function Game(numberOfPlayers, startingPlayerIndex) {
	this._turnNumber = 0;
	this._players = [];
	this._currentStep = -1;
	this._stack = [];
	this._hasPriority = null;
	this._activePlayer = null;
	this._battlefield = new Battlefield();

	for (var i = 0; i < numberOfPlayers; i++) {
		var player = new Player("player_" + String(i), this);
		this._players.push(player);
	}

	this._activePlayer = this._players[startingPlayerIndex];

	this.log(">>>>>>>>>>>>>> GAME STARTING <<<<<<<<<<<<<<")
	this.advanceToNextStep();
}

Game.prototype = {

	log: function (str) {
		console.log(str);
	},

	resetProrityPassers: function () {
		this._priorityPassers = [];
	},

	/**
	 * Handles incoming input from players
	 */
	handleInput: function (player, input, data) {
		this.log(">> " + player._id + " " + input);
		switch(input) {
			case Constants.inputs.PASS_PRIORITY:
				this.passPriority(player);
				break;
			case Constants.inputs.CONCEDE:
				player.concede();
				this.passPriority(player);
				break;
			case Constants.inputs.PLAY_LAND:
				player.putLandIntoPlay(data.landCard, true);
				break;
		}
	},

	tick: function () {
		if (this.playersShouldReceivePriority(this._currentStep)) {
			var input = this._hasPriority.getInput();
			if (input) {
				this.handleInput(this._hasPriority, input.input, input.data);
			}	
		}
	},

	passPriority: function (player) {
		this.log(player._id + " passes priority");
		while (this.performStateBasedActions() > 0) {
		}

		this._priorityPassers.push(player._id);

		var allPassed = true;
		this._players.forEach(function (player) {
			if (this._priorityPassers.indexOf(player._id) === -1) {
				allPassed = false;
			}
		}.bind(this));

		if (allPassed) {
			this.handleAllPassed();
		} else {
			this.givePriorityToNextPlayer();
		}
	},

	handleAllPassed: function () {
		this.log("All players passed priority");
		this.advanceToNextStep();
	},

	advanceToNextStep: function () {
		this.resetProrityPassers();
		if (this._currentStep < Constants.steps.CLEANUP) {
			if (this._turnNumber === 0 && this._currentStep === Constants.steps.UPKEEP) {
				this._currentStep = Constants.steps.MAIN1; // Skip draw step on first turn
			} else {
				this._currentStep++;
			}
		} else {
			this._turnNumber++;
			this.log("\n>>>>>>>>>>>>>> TURN " + this._turnNumber + " <<<<<<<<<<<<<<")
			this._activePlayer = this.getNextPlayer(this._activePlayer);
			this._currentStep = Constants.steps.UNTAP;
			this._players.forEach(function (player) {
				player.onNewTurn();
			});
		}
		this._hasPriority = this._activePlayer;

		this.logCurrentGameTime();

		this.performTurnbasedActions();

		while (this.performStateBasedActions() > 0) {
		}

		if (!this.playersShouldReceivePriority(this._currentStep)) {
			this.advanceToNextStep();
		}
	},

	logCurrentGameTime: function () {
		this.log("== It is now the " + Constants.stepNames[this._currentStep] + " step ==");
	},

	getNextPlayer: function (currentPlayer) {
		var isNext = false;
		var nextPlayer = null;
		this._players.forEach(function (player) {
			if (isNext && !nextPlayer) {
				nextPlayer = player;
			} else if (currentPlayer === player) {
				isNext = true;
			}
		}.bind(this));

		if (!nextPlayer) {
			nextPlayer = this._players[0];
		}

		return nextPlayer;
	},

	givePriorityToNextPlayer: function () {
		var playerReceivingPriority = this.getNextPlayer(this._hasPriority);
		this._hasPriority = playerReceivingPriority;
	},

	/**
	 * @returns {number} Number of actions taken
	 */
	performStateBasedActions: function () {

		var playersStillInGame = [];
		this._players.forEach(function (player) {
			if (!player.hasLost()) {
				playersStillInGame.push(player);
			}
		}.bind(this));

		if (playersStillInGame.length === 1) {
			this.handleGameWon(playersStillInGame[0]);
		} else if (playersStillInGame.length === 0) {
			this.handleGameDrawn();
		}

		var actionsPerformed = 0;
		actionsPerformed += this._battlefield.performStateBasedActions();

		return actionsPerformed;
	},

	handleGameWon: function (winner) {
		this.log(winner._id + " has won the game!");
		throw new GameOver(winner);
	},

	handleGameDrawn: function () {
		this.log("The game is a draw!");
		throw new GameOver(null);
	},

	performTurnbasedActions: function () {
		switch (this._currentStep) {
			case Constants.steps.DRAW:
				this._activePlayer.drawCard();
				break
			case Constants.steps.CLEANUP:
				this._players.forEach(function (player) {
					player.onCleanup(player === this._activePlayer);
				}.bind(this));

				var actionsPerformed = -1;
				while (actionsPerformed !== 0) {
					actionsPerformed = this._battlefield.onCleanup();
				}
				break;
		}
	},

	playersShouldReceivePriority: function (step) {
		if ([Constants.steps.UNTAP, Constants.steps.CLEANUP].indexOf(step) === -1) {
			return true;
		}

		return false;
	}
};

function testGame () {
	try {
		var game = new Game(2, 0);
		var p0 = game._players[0];
		var p1 = game._players[1];
		for (var i = 0; i < 100000; i++) {
			p0.addInput(Constants.inputs.PASS_PRIORITY, {});
			p1.addInput(Constants.inputs.PASS_PRIORITY, {});
		}

		while (true) {
			game.tick();
		}
	} catch (e) {
		if (e.constructor === GameOver) {
			console.log("Game over.");
		} else {
			throw e;
		}
	}
}

testGame();
