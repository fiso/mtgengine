var _ = require("underscore");
var Card = require("../objects/Card");
var Constants = require ("../Constants");
var Utils = require ("../Utils");

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
		Utils.assert(targets.length === 1);
		targets[0].damage(3, this._guid, false);
	},

	getCost: function () {
		var cost = {};
		cost[Constants.manaCosts.RED] = 1;
		return cost;
	}
});

module.exports = LightningBolt;
