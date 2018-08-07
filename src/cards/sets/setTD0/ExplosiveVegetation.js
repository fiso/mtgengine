"use strict";
const Constants = require ("../../../Constants");
const ExplosiveVegetationBase = require("../setC18/ExplosiveVegetation");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor (game) {
    super(game, "Explosive Vegetation", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ExplosiveVegetation;
