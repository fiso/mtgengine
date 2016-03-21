"use strict";
var Zone = require("./Zone");
var Constants = require ("../Constants");
var Card = require("../objects/Card");

var BasicMountain = require("../cards/BasicMountain");
var LightningBolt = require("../cards/LightningBolt");
var GoblinBully = require("../cards/GoblinBully");

class Library extends Zone {
	constructor (game, owner) {
		super(game, Constants.zoneTypes.HIDDEN, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.LIBRARY);

		// DEBUG
		for (var i = 0; i < 20; i++) {
			this._objects.push(new BasicMountain(game));
			this._objects.push(new LightningBolt(game));
			this._objects.push(new GoblinBully(game));
		}
	}

	drawCard () {
		return this._objects.pop();
	}
}

module.exports = Library;
