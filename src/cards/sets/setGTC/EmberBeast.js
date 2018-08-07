"use strict";
const Constants = require ("../../../Constants");
const EmberBeastBase = require("../setBBD/EmberBeast");

class EmberBeast extends EmberBeastBase {
  constructor (game) {
    super(game, "Ember Beast", "Gatecrash", "GTC");
  }
}

module.exports = EmberBeast;
