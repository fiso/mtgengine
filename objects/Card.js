var _ = require("underscore");
var MTGObject = require("./MTGObject");
var Constants = require("../Constants");
var Utils = require("../Utils");

function Card(game, name, superTypes, types, subTypes) {
	MTGObject.call(this, game);
	this._game = game;
	this._name = name;
	this._superTypes = superTypes ? superTypes.slice() : [];
	this._types = types ? types.slice() : [];
	this._subTypes = subTypes ? subTypes.slice() : [];
}

_.extend(Card.prototype, MTGObject.prototype, {
	constructor: Card,

	isBasicLand: function () {
		if (this._superTypes.indexOf(Constants.cardSuperTypes.BASIC) === -1) {
			return false;
		}

		if (this._types.indexOf(Constants.cardTypes.LAND) === -1) {
			return false;
		}

		return true;
	},

	isType: function (type) {
		return this._types.indexOf(type) !== -1;
	},

	resolve: function () {
		this._game.log("Card resolves");
	},

	getCost: function () {
		return {};
	}
});

module.exports = Card;
