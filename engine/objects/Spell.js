"use strict";
var MTGObject = require("./MTGObject");
var Constants = require("../Constants");
var assert = require("assert");

class Spell extends MTGObject {
	constructor (game, controller, fromZone, card, targets) {
		super(game);
		this._controller = controller;
		this._card = card;
		this._targets = targets;
		this._castFromZone = fromZone;
	}

	resolve () {
		let card = this._card;
		card.resolve(this._controller, this._targets);
		let zone = this.getCurrentZone();
		assert(zone._id === Constants.zoneIdentifiers.STACK);
		zone.removeObject(this);
		this._controller._graveyard.addObject(card);
	}

	getCost () {
		return this._card.getCost();
	}
}

module.exports = Spell;
