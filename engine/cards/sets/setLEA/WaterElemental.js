"use strict";
const Constants = require ("../../../Constants");
const WaterElementalBase = require("../setCED/WaterElemental");

class WaterElemental extends WaterElementalBase {
  constructor(game) {
    super(game, "Water Elemental", "Limited Edition Alpha", "LEA");
  }
}

module.exports = WaterElemental;
