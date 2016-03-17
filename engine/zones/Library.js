var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");
var Card = require("../objects/Card");

var BasicMountain = require("../cards/BasicMountain");
var LightningBolt = require("../cards/LightningBolt");

function Library(game, owner) {
	Zone.call(this, game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.LIBRARY);

	// DEBUG
	for (var i = 0; i < 30; i++) {
		this._objects.push(new BasicMountain(game));
		this._objects.push(new LightningBolt(game));
	}
}

_.extend(Library.prototype, Zone.prototype, {
	constructor: Library,

	drawCard: function () {
		return this._objects.pop();
	}
});

module.exports = Library;
