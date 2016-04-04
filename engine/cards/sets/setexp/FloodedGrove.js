"use strict";
const Constants = require ("../../../Constants");
const FloodedGroveBase = require("../setEVE/FloodedGrove");

class FloodedGrove extends FloodedGroveBase {
  constructor(game) {
    super(game, "Flooded Grove", "Zendikar Expedition", "EXP");
  }
}

module.exports = FloodedGrove;
