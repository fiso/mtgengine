var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");
var Card = require("../cards/Card");

function Library() {
	Zone.call(this, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER);

	// DEBUG
	for (var i = 0; i < 60; i++) {
		this._objects.push(new Card());
	}
}

_.extend(Library.prototype, Zone.prototype, {
	constructor: Library,

	drawCard: function () {
		return this._objects.pop();
	}
});

module.exports = Library;
