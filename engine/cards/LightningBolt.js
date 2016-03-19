"use strict";
var Card = require("../objects/Card");
var Constants = require ("../Constants");
var assert = require("assert");

class LightningBolt extends Card {
	constructor(game) {
		super(game, "Lightning Bolt",
			[],
			[Constants.cardTypes.INSTANT],
			[],
			"https://image.deckbrew.com/mtg/multiverseid/397722.jpg");
	}

	resolve (controller, targets) {
		this._game.log("Lightning Bolt resolves");
		assert(targets.length === 1);
		targets[0].damage(3, this._guid, false);
	}

	getCost () {
		var cost = {};
		cost[Constants.costs.RED] = 1;
		return cost;
	}
}

module.exports = LightningBolt;
