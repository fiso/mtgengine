var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Graveyard(game, owner) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.GRAVEYARD);
}

_.extend(Graveyard.prototype, Zone.prototype, {
	constructor: Graveyard
});

module.exports = Graveyard;
