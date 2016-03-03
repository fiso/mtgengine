var Constants = require("../Constants");

function Zone(zoneType, ownership, owner) {
	this._objects = [];
	this._zoneType = zoneType;
	this._ownership = ownership;
	this._owner = owner;
}

Zone.prototype = {
	addObject: function (object) {
		this._objects.push(object);
	},

	getNumberOfObjects: function () {
		return this._objects.length;
	},

	getObjects: function () {
		return this._objects;
	}
};

module.exports = Zone;
