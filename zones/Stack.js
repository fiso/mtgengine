var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Stack(game) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Stack.prototype, Zone.prototype, {
	constructor: Stack
});

module.exports = Stack;
