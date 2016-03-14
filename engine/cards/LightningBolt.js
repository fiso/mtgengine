var _ = require("underscore");
var Card = require("../objects/Card");
var Constants = require ("../Constants");
var assert = require("assert");

function LightningBolt(game) {
	Card.call(this, game, "Lightning Bolt",
		[],
		[Constants.cardTypes.INSTANT],
		[]);
}

_.extend(LightningBolt.prototype, Card.prototype, {
	constructor: LightningBolt,

	resolve: function (controller, targets) {
		this._game.log("Lightning Bolt resolves");
		assert(targets.length === 1);
		targets[0].damage(3, this._guid, false);
	},

	getCost: function () {
		var cost = {};
		cost[Constants.costs.RED] = 1;
		return cost;
	}
});

module.exports = LightningBolt;
