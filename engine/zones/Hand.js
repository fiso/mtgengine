var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Hand(game, owner) {
	Zone.call(this, game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.HAND);
}

_.extend(Hand.prototype, Zone.prototype, {
	constructor: Hand
});

module.exports = Hand;
