"use strict";
var assert = require("assert");

class MTGObject {
	constructor (game) {
		assert(game);
		this._game = game;
		this._zone = undefined;
		this._guid = game.getGuid("object");
	}

	placeInZone (zone) {
		this._zone = zone;
	}

	getCurrentZone () {
		return this._zone;
	}	
}

module.exports = MTGObject;
