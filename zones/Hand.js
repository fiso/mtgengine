var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Hand(game) {
	Zone.call(this, game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER);
}

_.extend(Hand.prototype, Zone.prototype, {
	constructor: Hand
});

module.exports = Hand;
