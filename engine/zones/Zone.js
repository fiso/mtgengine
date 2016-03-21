"use strict";
const Constants = require("../Constants");
const assert = require("assert");
const MTGObject = require("../objects/MTGObject");
const Card = require("../objects/Card");
const Outputs = require("../Outputs");

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
    this._game.log("Object entered " + this._id);
  }

  get numberOfObjects () {
    return this._objects.length;
  }

  get objects () {
    return this._objects;
  }

  removeObject (object) {
    let index = this._objects.indexOf(object);
    if (index === -1) {
      return null;
    }
    object.placeInZone(null);

    return this._objects.splice(index, 1)[0];
  }
}

module.exports = Zone;
