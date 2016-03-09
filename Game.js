var Player = require("./Player");
var Constants = require("./Constants");
var Events = require("./Events");
var Inputs = require("./Inputs");
var Outputs = require("./Outputs");
var _ = require("underscore");
var Battlefield = require("./zones/Battlefield");
var Stack = require("./zones/Stack");

var GameOver = function (winner) {
	this.winner = winner;
};

function Game(numberOfPlayers, startingPlayerIndex) {
	this._turnNumber = 0;
	this._players = [];
	this._currentStep = -1;
	this._hasPriority = null;
	this._activePlayer = null;
	this._battlefield = new Battlefield(this);
	this._stack = new Stack(this);
	this._guidCounters = {};

	this._eventListeners = {};

	for (var i = 0; i < numberOfPlayers; i++) {
		var player = new Player(this);
		this._players.push(player);
	}

	this._activePlayer = this._players[startingPlayerIndex];

	this.log(">>>>>>>>>>>>>> GAME STARTING <<<<<<<<<<<<<<")
	this._players.forEach(function (player) {
		player.onNewTurn(player === this._activePlayer);
	}.bind(this));
	this.advanceToNextStep();
}

Game.prototype = {

	log: function (str) {
		console.log(str);
	},

	logCurrentGameTime: function () {
		this.log("== It is now the " + Constants.stepNames[this._currentStep] + " step ==");
	},

	getGuid: function (prefix) {
		prefix = prefix || "o";
		prefix += "_"
		if (!this._guidCounters[prefix]) {
			this._guidCounters[prefix] = 0;
		}

		return prefix + String(this._guidCounters[prefix]++);
	},

	resetProrityPassers: function () {
		this._priorityPassers = [];
	},

	passPriority: function (player) {
		this._priorityPassers.push(player._guid);

		var allPassed = true;
		this._players.forEach(function (player) {
			if (this._priorityPassers.indexOf(player._guid) === -1) {
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

		if (this._stack.empty()) {
			this.advanceToNextStep();
		} else {
			this._stack.resolveTopObject();
		}
	},

	advanceToNextStep: function () {
		this.resetProrityPassers();
		this._players.forEach(function (player) {
			player.emptyManaPool();
		});
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
				player.onNewTurn(player === this._activePlayer);
			}.bind(this));
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

	performTurnbasedActions: function () {
		this._players.forEach(function (player) {
			player.performTurnbasedActions(
				this._currentStep,
				player === this._activePlayer);
		}.bind(this));

		if (this._currentStep === Constants.steps.CLEANUP) {
			while (this._battlefield.onCleanup() !== 0) {
			}
		}
	},

	handleGameWon: function (winner) {
		this.log(winner._guid + " has won the game!");
		throw new GameOver(winner);
	},

	handleGameDrawn: function () {
		this.log("The game is a draw!");
		throw new GameOver(null);
	},

	playersShouldReceivePriority: function (step) {
		if ([Constants.steps.UNTAP, Constants.steps.CLEANUP].indexOf(step) === -1) {
			return true;
		}

		return false;
	},

	tick: function () {
		if (this.playersShouldReceivePriority(this._currentStep)) {
			var input = this._hasPriority.getInput();
			if (input) {
				this.handleInput(this._hasPriority, input.input, input.data);
			}	
		}
	},

	isWaitingForInput: function () {
		if (this.playersShouldReceivePriority(this._currentStep)) {
			return !this._hasPriority.hasUnprocessedInputs();
		}

		return false;
	},

	/**
	 * Handles incoming input from players
	 */
	handleInput: function (player, input, data) {
		while (this.performStateBasedActions() > 0) {
		}

		this.log(">> " + player._guid + " " + input);
		switch(input) {
			case Inputs.PASS_PRIORITY:
				this.passPriority(player);
				break;
			case Inputs.CONCEDE:
				player.concede();
				this.passPriority(player);
				break;
			case Inputs.PLAY_LAND:
				player.putLandIntoPlay(data.landCard, true);
				break;
			case Inputs.CAST_SPELL:
				var spell = player.castSpell(data.card, data.targets);
				if (spell) {
					this.emitEvent(Events.SPELL_CAST, {spell: spell});
				}
				break;
			case Inputs.ACTIVATE_ABILITY:
				var ability = player.activateAbility(data.permanent, data.abilityIndex);
				if (ability) {
					this.emitEvent(Events.ABILITY_ACTIVATED, {ability: ability});
				}
		}
	},

	registerEventListener: function (listener, event) {
		if (!this._eventListeners[event]) {
			this._eventListeners[event] = [];
		}

		this._eventListeners[event].push(listener);
	},

	/**
	 * Notifies any listeners that something is about to happen to the gamestate.
	 * This may or may not actually allow the event to happen, as we first check for
	 * any replacement effects to be applied.
	 * @returns {boolean} True if the event may happen as normal, false if it was replaced
	 */
	emitEvent: function (event, data) {
		if (!this._eventListeners[event]) {
			return true;
		}

		this._eventListeners[event].forEach(function (listener) {
			listener.onEvent(event, data);
		});

		return true;
	},

	/**
	 * Sends output from the game to the visualization
	 */
	addOutput: function (output, data) {

	}
};

function testGame () {
	try {
		var game = new Game(2, 0);
		var p0 = game._players[0];
		var p1 = game._players[1];

		while (true) {
			if (game.isWaitingForInput()) {
				var player = game._hasPriority;
				if (player === game._activePlayer) {
					if (game._currentStep === Constants.steps.MAIN1 ||
						game._currentStep === Constants.steps.MAIN2) {
						if (game._stack.empty()) {
							if (player._landPlaysRemaining > 0) {
								var cardsInHand = player._hand.getObjects();
								for (var i = 0; i < cardsInHand.length; i++) {
									var cardInHand = cardsInHand[i];
									if (cardInHand.isType(Constants.cardTypes.LAND)) {
										player.addInput(Inputs.PLAY_LAND, {landCard: cardInHand});
										break;
									}
								}
							} else {
								var cardsInHand = player._hand.getObjects();
								for (var i = 0; i < cardsInHand.length; i++) {
									var cardInHand = cardsInHand[i];
									if (cardInHand.isType(Constants.cardTypes.INSTANT)) {
										player.addInput(Inputs.ACTIVATE_ABILITY, {
											permanent: game._battlefield.getPermanentsControlledByPlayer(player)[0],
											abilityIndex: 0
										});
										player.addInput(Inputs.CAST_SPELL, {
											card: cardInHand,
											targets: [game.getNextPlayer(player)]
										});
										player.addInput(Inputs.PASS_PRIORITY, {});
										break;
									}
								}
							}
						}
					}
				}				

				if (!player.hasUnprocessedInputs()) {
					player.addInput(Inputs.PASS_PRIORITY, {});
				}
			} else if (!game.isWaitingForInput()) {
				game.tick();
			}
		}
	} catch (e) {
		if (e instanceof GameOver) {
			console.log("Game over.");
		} else {
			throw e;
		}
	}
}

testGame();
