"use strict";
const Constants = require ("../../../Constants");
const ExplosiveVegetationBase = require("../setC18/ExplosiveVegetation");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor (game) {
    super(game, "Explosive Vegetation", "Commander 2011", "CMD");
  }
}

module.exports = ExplosiveVegetation;
