var Constants = require("../Constants");
var Utils = require("../Utils");

function Zone(game, zoneType, ownership, owner) {
	Utils.assert(game);
	this._objects = [];
	this._zoneType = zoneType;
	this._ownership = ownership;
	this._owner = owner;
	this._game = game;
}

Zone.prototype = {
	empty: function () {
		return this._objects.length === 0;
	},

	addObject: function (object) {
		this._objects.push(object);
		if (object.placeInZone) {
			object.placeInZone(this);
		}
	},

	getNumberOfObjects: function () {
		return this._objects.length;
	},

	getObjects: function () {
		return this._objects;
	},

	removeObject: function (object) {
		var index = this._objects.indexOf(object);
		if (index === -1) {
			return null;
		}
		if (object.placeInZone) {
			object.placeInZone(null);
		}

		return this._objects.splice(index, 1)[0];
	}
};

module.exports = Zone;
