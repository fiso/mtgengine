var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Battlefield(game) {
	Zone.call(this, game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
}

_.extend(Battlefield.prototype, Zone.prototype, {
	constructor: Battlefield,

	performStateBasedActions: function () {
		var actionsPerformed = 0;
		this._objects.forEach(function (permanent) {
			if (permanent.isCreature()) {
				if (permanent.hasLethalDamage()) {
					// FIXME: Dies
					actionsPerformed++;
				}
			}
		}.bind(this));

		return actionsPerformed;
	},

	onCleanup: function () {
		var actionsPerformed = 0;
		this._objects.forEach(function (permanent) {
			permanent.onCleanup();
		}.bind(this));

		return actionsPerformed;
	},

	getPermanentsControlledByPlayer: function (player) {
		var permanents = [];
		this._objects.forEach(function (permanent) {
			if (permanent.isControlledBy(player)) {
				permanents.push(permanent);
			}
		});

		return permanents;
	},

	getPermanentsOwnedByPlayer: function (player) {
		var permanents = [];
		this._objects.forEach(function (permanent) {
			if (permanent.isControlledBy(player)) {
				permanents.push(permanent);
			}
		});

		return permanents;
	}
});

module.exports = Battlefield;
