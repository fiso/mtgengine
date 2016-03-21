"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");

class Command extends Zone {
	constructor (game) {
		super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.COMMAND);
	}
}

module.exports = Command;
