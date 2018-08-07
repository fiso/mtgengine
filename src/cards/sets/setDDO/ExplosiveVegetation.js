"use strict";
const Constants = require ("../../../Constants");
const ExplosiveVegetationBase = require("../setC18/ExplosiveVegetation");

class ExplosiveVegetation extends ExplosiveVegetationBase {
  constructor (game) {
    super(game, "Explosive Vegetation", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = ExplosiveVegetation;
