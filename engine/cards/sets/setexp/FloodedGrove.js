"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodedGroveBase = require("../setEVE/FloodedGrove.js");

class FloodedGrove extends FloodedGroveBase {
  constructor(game) {
    super(game, "Flooded Grove", "Zendikar Expedition", "EXP");
  }
}

module.exports = FloodedGrove;
