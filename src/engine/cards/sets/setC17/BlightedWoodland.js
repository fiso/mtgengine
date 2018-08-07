"use strict";
const Constants = require ("../../../Constants");
const BlightedWoodlandBase = require("../setC18/BlightedWoodland");

class BlightedWoodland extends BlightedWoodlandBase {
  constructor (game) {
    super(game, "Blighted Woodland", "Commander 2017", "C17");
  }
}

module.exports = BlightedWoodland;
