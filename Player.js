var Library = require("./zones/Library");
var Graveyard = require("./zones/Graveyard");
var Hand = require("./zones/Hand");
var Permanent = require("./objects/Permanent");
var Spell = require("./objects/Spell");
var Utils = require("./Utils");
var Constants = require("./Constants");

function Player(game) {
	this._guid = game.getGuid("player");
	this._game = game;
	this._life = 20;
	this._poisonCounters = 0;
	this._maximumHandSize = 7;
	this._hasConceded = false;
	this._triedToDrawFromEmptyLibrary = false;
	this._inputQueue = [];
	this._library = new Library(game);
	this._graveyard = new Graveyard(game);
	this._hand = new Hand(game);
	this._landPlaysRemaining = 0;
	this._manaPool = [];

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

	performTurnbasedActions: function (step, activePlayer) {
		switch (step) {
			case Constants.steps.UNTAP:
				this.onUntap(activePlayer);
				break;
			case Constants.steps.UPKEEP:
				this.onUpkeep(activePlayer);
				break;
			case Constants.steps.DRAW:
				this.onDraw(activePlayer);
				break
			case Constants.steps.MAIN1:
				this.onMain1(activePlayer);
				break;
			case Constants.steps.BEGIN_COMBAT:
				this.onBeginCombat(activePlayer);
				break;
			case Constants.steps.DECLARE_ATTACKERS:
				this.onDeclareAttackers(activePlayer);
				break;
			case Constants.steps.DECLARE_BLOCKERS:
				this.onDeclareBlockers(activePlayer);
				break;
			case Constants.steps.FIRST_COMBAT_DAMAGE:
				this.onFirstCombatDamage(activePlayer);
				break;
			case Constants.steps.COMBAT_DAMAGE:
				this.onCombatDamage(activePlayer);
				break;
			case Constants.steps.END_COMBAT:
				this.onEndCombat(activePlayer);
				break;
			case Constants.steps.MAIN2:
				this.onMain2(activePlayer);
				break;
			case Constants.steps.END:
				this.onEnd(activePlayer);
				break;
			case Constants.steps.CLEANUP:
				this.onCleanup(activePlayer);
				break;
		}
	},

	onUntap: function (activePlayer) {
		if (activePlayer) {
			var permanents = this._game._battlefield.getPermanentsControlledByPlayer(this);
			permanents.forEach(function (permanent) {
				permanent.untap();
			})
		}
	},

	onUpkeep: function (activePlayer) {

	},

	onDraw: function (activePlayer) {
		if (activePlayer) {
			this.drawCard();
		}
	},

	onMain1: function (activePlayer) {

	},

	onBeginCombat: function (activePlayer) {

	},

	onDeclareAttackers: function (activePlayer) {

	},

	onDeclareBlockers: function (activePlayer) {

	},

	onFirstCombatDamage: function (activePlayer) {

	},

	onCombatDamage: function (activePlayer) {

	},

	onEndCombat: function (activePlayer) {

	},

	onMain2: function (activePlayer) {

	},

	onEnd: function (activePlayer) {

	},

	onCleanup: function (activePlayer) {
		if (activePlayer) {
			var cardsDiscarded = 0;
			while (this.getHand().getNumberOfObjects() > this.getMaximumHandSize()) {
				var card = this.discardCard();
				cardsDiscarded += card ? 1 : 0;
			}
			if (cardsDiscarded > 0) {
				this._game.log("Active player discarded " + cardsDiscarded + " cards");
			}
		}
	},

	damage: function (amount, sourceId) {
		this._life -= amount;
		this._game.log(this._guid + " takes " + amount + " damage from " + sourceId + ". Life total: " + this._life);
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
			this._game.log(this._guid + " tried to draw from an empty library");
		} else {
			this._hand.addObject(card);
			this._game.log(this._guid + " draws " + card._name + ". " + this._library.getObjects().length + " cards left in library.");
		}
	},

	getHand: function () {
		return this._hand;
	},

	addInput: function (input, data) {
		this._inputQueue.push({input: input, data: data});
	},

	hasUnprocessedInputs: function () {
		return this._inputQueue.length > 0;
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
			Utils.assert(this._landPlaysRemaining >= 1)
			Utils.assert(this._game._stack.empty());

			this._landPlaysRemaining--;
		}

		var card = this._hand.removeObject(landCard);
		Utils.assert(card);

		var permanent = new Permanent(this._game, this, this, landCard);
		return permanent;
	},

	castSpell: function (card, targets) {
		var zone = card.getCurrentZone();
		var card = zone.removeObject(card);
		Utils.assert(card);

		var spell = new Spell(this._game, this, card, targets);
		this._game._stack.addObject(spell);
		return spell;
	}
};

module.exports = Player;
