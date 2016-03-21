"use strict";
var Card = require("../objects/Card");
var Constants = require ("../Constants");
var Permanent = require("../objects/Permanent");
var assert = require("assert");

class GoblinBully extends Card {
	constructor(game) {
		super(game, "Goblin Bully",
			[],
			[Constants.cardTypes.CREATURE],
			["Goblin"],
			"https://image.deckbrew.com/mtg/multiverseid/4342.jpg");
	}

	resolve (controller) {
		this._game.log("Goblin Bully resolves");

		return new Permanent(this._game, controller,
			controller, card);
	}

	getCost () {
		var cost = {
			mana: {}
		};
		cost["mana"][Constants.costs.RED] = 1;
		cost["mana"][Constants.costs.GENERIC] = 1;
		return cost;
	}
}

module.exports = GoblinBully;
