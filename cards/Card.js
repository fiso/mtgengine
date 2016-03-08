var Constants = require("../Constants");
var Utils = require("../Utils");

function Card(game, name, superTypes, types, subTypes) {
	Utils.assert(game);
	this._game = game;
	this._name = name;
	this._superTypes = superTypes ? superTypes.slice() : [];
	this._types = types ? types.slice() : [];
	this._subTypes = subTypes ? subTypes.slice() : [];
	this._guid = game.getGuid("card");
}

Card.prototype = {
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
	}

};

module.exports = Card;
