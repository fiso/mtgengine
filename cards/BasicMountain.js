var _ = require("underscore");
var Card = require("../objects/Card");
var Constants = require ("../Constants");

function BasicMountain(game) {
	Card.call(this, game, "Mountain",
		[Constants.cardSuperTypes.BASIC],
		[Constants.cardTypes.LAND],
		["MOUNTAIN"]);

	this.addAbility(
		[],
		function (controller, modes, targets, parameters) {
			controller.addToManaPool(Constants.manaTypes.RED, 1);
		}, true);
}

_.extend(BasicMountain.prototype, Card.prototype, {
	constructor: BasicMountain
});

module.exports = BasicMountain;
