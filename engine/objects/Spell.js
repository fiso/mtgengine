"use strict";
var MTGObject = require("./MTGObject");
var Constants = require("../Constants");

class Spell extends MTGObject {
	constructor (game, controller, fromZone, card, targets) {
		super(game);
		this._controller = controller;
		this._card = card;
		this._targets = targets;
		this._castFromZone = fromZone;
	}

	resolve () {
		this._card.resolve(this._controller, this._targets);
	}

	getCost () {
		return this._card.getCost();
	}
}

module.exports = Spell;
