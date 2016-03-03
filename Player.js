var Library = require("./zones/Library");
var Graveyard = require("./zones/Graveyard");
var Hand = require("./zones/Hand");
var Permanent = require("./Permanent");

function Player(id, game) {
	this._id = id;
	this._game = game;
	this._life = 20;
	this._poisonCounters = 0;
	this._maximumHandSize = 7;
	this._hasConceded = false;
	this._triedToDrawFromEmptyLibrary = false;
	this._inputQueue = [];
	this._library = new Library();
	this._graveyard = new Graveyard();
	this._hand = new Hand();
	this._landPlaysRemaining = 0;

	for (var i = 0; i < 7; i++) {
		this.drawCard();
	}
}

Player.prototype = {
	onNewTurn: function (activePlayer) {
		if (activePlayer) {
			this._landPlaysRemaining = 1;
		} else {
			this._landPlaysRemaining = 0;
		}
	},

	damage: function (amount, sourceId) {
		this._life -= amount;
		this._game.log(this._id + " takes " + amount + " damage from " + sourceId + ". Life total: " + this._life);
	},

	concede: function () {
		this._hasConceded = true;
	},

	hasLost: function () {
		if (this._life <= 0) {
			return true;
		}

		if (this._poisonCounters >= 10) {
			return true;
		}

		if (this._hasConceded) {
			return true;
		}

		if (this._triedToDrawFromEmptyLibrary) {
			return true;
		}

		return false;
	},

	drawCard: function () {
		var card = this._library.drawCard();
		if (!card) {
			this._triedToDrawFromEmptyLibrary = true;
		} else {
			this._hand.addObject(card);
		}
		this._game.log(this._id + " draws a card. " + this._library.getObjects().length + " cards left in library.");
	},

	getHand: function () {
		return this._hand;
	},

	addInput: function (input, data) {
		this._inputQueue.push({input: input, data: data});
	},

	getInput: function () {
		return this._inputQueue.shift();
	},

	getMaximumHandSize: function () {
		return this._maximumHandSize;
	},

	discardCard: function () {
		var card = this._hand.getObjects().pop();
		if (card) {
			this._graveyard.addObject(card);
		}

		return card;
	},

	putLandIntoPlay: function (landCard, countsAsNormalLandPlay) {
		if (countsAsNormalLandPlay) {
			if (this._landPlaysRemaining < 1) {
				return null;
			}

			this._landPlaysRemaining--;
		}

		var permanent = new Permanent(this, this, landCard);
		this._game._battlefield.addObject(permanent);
		return permanent;
	}
};

module.exports = Player;
