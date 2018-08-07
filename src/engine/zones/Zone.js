'use strict';
const assert = require('assert');
const Outputs = require('../Outputs');
const Utils = require('../Utils');

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

  shuffle () {
    Utils.shuffle(this._objects);
  }

  addObject (object) {
    this._objects.push(object);
    object.placeInZone(this);
    this._game.addOutput(Outputs.OBJECT_ENTERED_ZONE, {object: object});
    this._game.log('Object entered ' + this._id);
  }

  get numberOfObjects () {
    return this._objects.length;
  }

  get objects () {
    return this._objects;
  }

  getTypesInZone () {
    return [...new Set(this._objects.reduce(
      (acc, object) => {
        if (!Array.isArray(object._types)) {
          return acc;
        }
        return acc.concat(object._types);
      }, []
    ))];
  }

  removeObject (object) {
    const index = this._objects.indexOf(object);
    if (index === -1) {
      return null;
    }
    object.placeInZone(null);

    return this._objects.splice(index, 1)[0];
  }
}

module.exports = Zone;
