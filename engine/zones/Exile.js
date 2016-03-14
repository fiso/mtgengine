var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Exile(game) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Exile.prototype, Zone.prototype, {
	constructor: Exile
});

module.exports = Exile;
