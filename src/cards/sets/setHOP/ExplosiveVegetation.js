"use strict";
const Constants = require ("../../../Constants");
const ExplosiveVegetationBase = require("../setDTK/ExplosiveVegetation");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor(game) {
    super(game, "Explosive Vegetation", "Planechase", "HOP");
  }
}

module.exports = ExplosiveVegetation;
