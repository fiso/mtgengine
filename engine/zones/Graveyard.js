"use strict";
var Zone = require("./Zone");
var Constants = require ("../Constants");

class Graveyard extends Zone {
	constructor (game, owner) {
		super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.PLAYER, owner, Constants.zoneIdentifiers.GRAVEYARD);
	}
}

module.exports = Graveyard;
