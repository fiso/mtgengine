var Constants = require("../Constants");
var assert = require("assert");
var MTGObject = require("../objects/MTGObject");
var Card = require("../objects/Card");

function Zone(game, zoneType, ownership, owner) {
	assert(game);
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
		object.placeInZone(this);
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
		object.placeInZone(null);

		return this._objects.splice(index, 1)[0];
	}
};

module.exports = Zone;
