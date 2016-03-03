var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Graveyard() {
	Zone.call(this, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.PLAYER);
}

_.extend(Graveyard.prototype, Zone.prototype, {
	constructor: Graveyard
});

module.exports = Graveyard;
