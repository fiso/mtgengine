"use strict";
const Constants = require ("../../../Constants");
const WaterElementalBase = require("../setCED/WaterElemental");

class WaterElemental extends WaterElementalBase {
  constructor (game) {
    super(game, "Water Elemental", "Fourth Edition", "4ED");
  }
}

module.exports = WaterElemental;
