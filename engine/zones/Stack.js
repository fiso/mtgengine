var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Stack(game) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.STACK);
}

_.extend(Stack.prototype, Zone.prototype, {
	constructor: Stack,

	resolveTopObject: function () {
		var object = this._objects.pop();
		if (object) {
			object.resolve();
		}
	}
});

module.exports = Stack;
