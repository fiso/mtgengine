var assert = require("assert");

function MTGObject(game) {
	assert(game);
	this._game = game;
	this._zone = undefined;
	this._guid = game.getGuid("object");
}

MTGObject.prototype = {
	placeInZone: function (zone) {
		this._zone = zone;
	},

	getCurrentZone: function () {
		return this._zone;
	}	
};

module.exports = MTGObject;
