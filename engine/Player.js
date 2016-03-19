"use strict";
var Library = require("./zones/Library");
var Graveyard = require("./zones/Graveyard");
var Hand = require("./zones/Hand");
var Permanent = require("./objects/Permanent");
var Spell = require("./objects/Spell");
var assert = require("assert");
var Constants = require("./Constants");

class Player {
	constructor (game) {
		this._guid = game.getGuid("player");
		this._game = game;
		this._life = 20;
		this._poisonCounters = 0;
		this._maximumHandSize = 7;
		this._hasConceded = false;
		this._triedToDrawFromEmptyLibrary = false;
		this._inputQueue = [];
		this._library = new Library(game, this);
		this._graveyard = new Graveyard(game, this);
		this._hand = new Hand(game, this);
		this._landPlaysRemaining = 0;
		this._manaPool = {};

		for (var i = 0; i < 7; i++) {
			this.drawCard();
		}
	}

	onNewTurn (activePlayer) {
		if (activePlayer) {
			this._landPlaysRemaining = 1;
		} else {
			this._landPlaysRemaining = 0;
		}
	}

	performTurnbasedActions (step, activePlayer) {
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
	}

	onUntap (activePlayer) {
		if (activePlayer) {
			var permanents = this._game._battlefield.getPermanentsControlledByPlayer(this);
			permanents.forEach(permanent => {
				permanent.untap();
			});
		}
	}

	onUpkeep (activePlayer) {

	}

	onDraw (activePlayer) {
		if (activePlayer) {
			this.drawCard();
		}
	}

	onMain1 (activePlayer) {

	}

	onBeginCombat (activePlayer) {

	}

	onDeclareAttackers (activePlayer) {

	}

	onDeclareBlockers (activePlayer) {

	}

	onFirstCombatDamage (activePlayer) {

	}

	onCombatDamage (activePlayer) {

	}

	onEndCombat (activePlayer) {

	}

	onMain2 (activePlayer) {

	}

	onEnd (activePlayer) {

	}

	onCleanup (activePlayer) {
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
	}

	damage (amount, sourceId, sourceHasInfect) {
		if (sourceHasInfect) {
			this._poisonCounters += amount;
		} else {
			this._life -= amount;
		}

		this._game.log(this._guid + " takes " + amount + " damage from " + sourceId + ". Life total: " + this._life + " Poision counters: " + this._poisonCounters);
	}

	concede () {
		this._hasConceded = true;
	}

	hasLost () {
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
	}

	drawCard () {
		var card = this._library.drawCard();
		if (!card) {
			this._triedToDrawFromEmptyLibrary = true;
			this._game.log(this._guid + " tried to draw from an empty library");
		} else {
			this._hand.addObject(card);
			this._game.log(this._guid + " draws " + card._name + ". " + this._library.getObjects().length + " cards left in library.");
		}
	}

	getHand () {
		return this._hand;
	}

	addInput (input, data) {
		this._inputQueue.push({input: input, data: data});
	}

	hasUnprocessedInputs () {
		return this._inputQueue.length > 0;
	}

	getInput () {
		return this._inputQueue.shift();
	}

	getMaximumHandSize () {
		return this._maximumHandSize;
	}

	discardCard () {
		var card = this._hand.getObjects().pop();
		if (card) {
			this._graveyard.addObject(card);
		}

		return card;
	}

	putLandIntoPlay (landCard, countsAsNormalLandPlay) {
		if (countsAsNormalLandPlay) {
			assert(this._landPlaysRemaining >= 1)
			assert(this._game._stack.empty());

			this._landPlaysRemaining--;
		}

		var card = this._hand.removeObject(landCard);
		assert(card);

		var permanent = new Permanent(this._game, this, this, landCard);
		return permanent;
	}

	announceSpell (card) {
		var zone = card.getCurrentZone();
		var card = zone.removeObject(card);
		assert(card);

		var spell = new Spell(this._game, this, card, targets);
		this._game._stack.addObject(spell);
		return spell;
	}

	abortSpellCast (spell) {
		var zone = spell.getCurrentZone();
		var spell = zone.removeObject(spell);
		assert(spell);
		assert(spell._card);

		spell._castFromZone.addObject(spell._card);
	}

	castSpell (card, targets) {
		var zone = card.getCurrentZone();
		var card = zone.removeObject(card);
		assert(card);

		var spell = new Spell(this._game, this, zone, card, targets);
		this._game._stack.addObject(spell);
		return spell;
	}

	activateAbility (permanent, abilityIndex) {
		var ability = permanent._card._abilities[abilityIndex];
		ability.abilityCallback(this, [], [], []);
	}

	addToManaPool (mana, amount) {
		if (!this._manaPool[mana]) {
			this._manaPool[mana] = 0;
		}

		console.log("ADDING TO MANA POOL: ", mana, amount);
		this._manaPool[mana] += amount;
	}

	emptyManaPool () {
		this._manaPool = {};
	}
}

module.exports = Player;
