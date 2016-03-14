var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require("../Constants");
var Utils = require("../Utils");
var Events = require("../Events");
var Outputs = require("../Outputs");

function Permanent(game, owner, controller, card) {
	MTGObject.call(this, game);
	this._game = game;
	this._tapState = Constants.tapStates.UNTAPPED;
	this._flipState = Constants.flipStates.NORMAL;
	this._transformState = Constants.transformState.NORMAL;
	this._faceState = Constants.faceState.FACEUP;
	this._owner = owner;
	this._controller = controller;
	this._card = card;
	this._power = undefined;
	this._toughness = undefined;
	this._damage = 0;

	this._game._battlefield.addObject(this);
}

_.extend(Permanent.prototype, MTGObject.prototype, {
	constructor: Permanent,

	isControlledBy: function (player) {
		return this._controller === player;
	},

	isOwnedBy: function (player) {
		return this._owner === player;
	},

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
	},

	tap: function () {
		if (this._game.emitEvent(Events.PERMANENT_TAPPED, {permanent: this})) {
			this._tapState = Constants.tapStates.TAPPED;
			this._game.addOutput(Outputs.PERMANENT_TAPPED, {permanent: this});
		}
	},

	untap: function () {
		if (this._game.emitEvent(Events.PERMANENT_UNTAPPED, {permanent: this})) {
			this._game.log("Untapping " + this._card._name);
			this._tapState = Constants.tapStates.UNTAPPED;
			this._game.addOutput(Outputs.PERMANENT_UNTAPPED, {permanent: this});
		}
	}
});

module.exports = Permanent;
