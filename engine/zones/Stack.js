"use strict";
const Zone = require("./Zone");
const Constants = require ("../Constants");

class Stack extends Zone {
  constructor (game) {
    super(game, Constants.zoneTypes.PUBLIC, Constants.zoneOwnership.SHARED, null, Constants.zoneIdentifiers.STACK);
  }

  resolveTopObject () {
    let object = this._objects.pop();
    if (object) {
      object.resolve();
    }
  }
}

module.exports = Stack;
