var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Command() {
	Zone.call(this, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Command.prototype, Zone.prototype, {
	constructor: Command
});

module.exports = Command;
