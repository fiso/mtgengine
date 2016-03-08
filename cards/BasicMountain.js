var _ = require("underscore");
var Card = require("./Card");
var Constants = require ("../Constants");

function BasicMountain(game) {
	Card.call(this, game, "Mountain",
		[Constants.cardSuperTypes.BASIC],
		[Constants.cardTypes.LAND],
		["MOUNTAIN"]);
}

_.extend(BasicMountain.prototype, Card.prototype, {
	constructor: BasicMountain,
});

module.exports = BasicMountain;
