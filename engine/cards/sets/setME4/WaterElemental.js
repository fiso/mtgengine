"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaterElementalBase = require("../setCED/WaterElemental.js");

class WaterElemental extends WaterElementalBase {
  constructor(game) {
    super(game, "Water Elemental", "Masters Edition IV", "ME4");
  }
}

module.exports = WaterElemental;
