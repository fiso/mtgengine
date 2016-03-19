"use strict";
var Constants = require("../Constants");
var assert = require("assert");
var MTGObject = require("../objects/MTGObject");
var Card = require("../objects/Card");
var Outputs = require("../Outputs");

class Zone {
	constructor (game, zoneType, ownership, owner, id) {
		assert(game);
		this._objects = [];
		this._zoneType = zoneType;
		this._ownership = ownership;
		this._owner = owner;
		this._game = game;
		this._id = id;
	}

	empty () {
		return this._objects.length === 0;
	}

	addObject (object) {
		this._objects.push(object);
		object.placeInZone(this);
		this._game.addOutput(Outputs.OBJECT_ENTERED_ZONE, {object: object});
	}

	getNumberOfObjects () {
		return this._objects.length;
	}

	getObjects () {
		return this._objects;
	}

	removeObject (object) {
		var index = this._objects.indexOf(object);
		if (index === -1) {
			return null;
		}
		object.placeInZone(null);

		return this._objects.splice(index, 1)[0];
	}
}

module.exports = Zone;
