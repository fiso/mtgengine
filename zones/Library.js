var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");
var Card = require("../cards/Card");
var BasicMountain = require("../cards/BasicMountain");

function Library(game) {
	Zone.call(this, game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER);

	// DEBUG
	for (var i = 0; i < 60; i++) {
		this._objects.push(new BasicMountain(game));
	}
}

_.extend(Library.prototype, Zone.prototype, {
	constructor: Library,

	drawCard: function () {
		return this._objects.pop();
	}
});

module.exports = Library;
