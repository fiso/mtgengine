"use strict";
const Constants = require ("../../../Constants");
const FloodedGroveBase = require("../setA25/FloodedGrove");

class FloodedGrove extends FloodedGroveBase {
  constructor (game) {
    super(game, "Flooded Grove", "Eventide", "EVE");
  }
}

module.exports = FloodedGrove;
