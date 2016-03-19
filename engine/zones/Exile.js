"use strict";
var Zone = require("./Zone");
var Constants = require ("../Constants");

class Exile extends Zone {
	constructor (game) {
		super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.EXILE);
	}
}

module.exports = Exile;
