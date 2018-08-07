"use strict";
const Constants = require ("../../../Constants");
const WaterElementalBase = require("../setME4/WaterElemental");

class WaterElemental extends WaterElementalBase {
  constructor (game) {
    super(game, "Water Elemental", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = WaterElemental;
