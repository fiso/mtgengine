var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require("./Constants");

function Stack() {
	Zone.call(this, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Stack.prototype, Zone.prototype, {
	constructor: Stack
});

module.exports = Stack;
