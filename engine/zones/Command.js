var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Command(game) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.COMMAND);
}

_.extend(Command.prototype, Zone.prototype, {
	constructor: Command
});

module.exports = Command;
