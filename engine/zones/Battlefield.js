"use strict";
var Zone = require("./Zone");
var Constants = require ("../Constants");

class Battlefield extends Zone {
	constructor (game) {
		super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.BATTLEFIELD);
	}

	performStateBasedActions () {
		var actionsPerformed = 0;
		this._objects.forEach(permanent => {
			if (permanent.isCreature()) {
				if (permanent.hasLethalDamage()) {
					// FIXME: Dies
					actionsPerformed++;
				}
			}
		});

		return actionsPerformed;
	}

	onCleanup () {
		var actionsPerformed = 0;
		this._objects.forEach(permanent => {
			permanent.onCleanup();
		});

		return actionsPerformed;
	}

	getPermanentsControlledByPlayer (player) {
		var permanents = [];
		this._objects.forEach(permanent => {
			if (permanent.isControlledBy(player)) {
				permanents.push(permanent);
			}
		});

		return permanents;
	}

	getPermanentsOwnedByPlayer (player) {
		var permanents = [];
		this._objects.forEach(permanent => {
			if (permanent.isControlledBy(player)) {
				permanents.push(permanent);
			}
		});

		return permanents;
	}
}

module.exports = Battlefield;
