var Constants = require("./Constants");

function Permanent(owner, controller, card) {
	this._tapState = Constants.tapStates.UNTAPPED;
	this._flipState = Constants.flipStates.NORMAL;
	this._transformState = Constants.transformState.NORMAL;
	this._faceState = Constants.faceState.FACEUP;
	this._owner = owner;
	this._controller = controller;
	this._card = card;
	this._power = -1;
	this._toughness = -1;

	this._damage = 0;
}

Permanent.prototype = {
	onCleanup: function () {
		this._damage = 0;
	},

	isCreature: function () {
		if (this._card._types.indexOf(Constants.cardTypes.CREATURE) === -1) {
			return false;
		}

		return true;
	},

	/**
	 * @returns {number} The current power of the permanent, if it's a creature.
	 */
	getPower: function () {
		return this._power;
	},

	/**
	 * @returns {number} The current toughness of the permanent, if it's a creature.
	 */
	getToughness: function () {
		return this._toughness;
	},

	hasLethalDamage: function () {
		return this._damage >= this.getToughness();
	},

	hasNonPositiveToughness: function () {
		return this.getToughness() <= 0;
	},

	isControlledBy: function (player) {
		return this._controller === player;
	}
};

module.exports = Permanent;
