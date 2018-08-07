"use strict";
const Constants = require ("../../../Constants");
const EmberBeastBase = require("../setBBD/EmberBeast");

class EmberBeast extends EmberBeastBase {
  constructor (game) {
    super(game, "Ember Beast", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = EmberBeast;
