"use strict";
var Zone = require("./Zone");
var Constants = require ("../Constants");

class Stack extends Zone {
	constructor (game) {
		super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.STACK);
	}

	resolveTopObject () {
		var object = this._objects.pop();
		if (object) {
			object.resolve();
		}
	}
}

module.exports = Stack;
