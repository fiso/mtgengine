"use strict";
const Constants = require ("../../../Constants");
const BlightedWoodlandBase = require("../setC18/BlightedWoodland");

class BlightedWoodland extends BlightedWoodlandBase {
  constructor (game) {
    super(game, "Blighted Woodland", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedWoodland;
