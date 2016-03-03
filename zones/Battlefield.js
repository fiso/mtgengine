var _ = require("underscore");
var Zone = require("./Zone");
var Constants = require ("../Constants");

function Battlefield() {
	Zone.call(this, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED);
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
	}
});

module.exports = Battlefield;
