var Constants = require("../Constants");

function Card(name, superTypes, types, subTypes) {
	this._name = name;
	this._superTypes = superTypes ? superTypes.slice() : [];
	this._types = types ? types.slice() : [];
	this._subTypes = subTypes ? subTypes.slice() : [];
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
	}	
};

module.exports = Card;
