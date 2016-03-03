var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Battlefield() {
	Zone.call(this, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Battlefield.prototype, Zone.prototype, {
	constructor: Battlefield
});

module.exports = Battlefield;
