"use strict";
const Constants = require ("../../../Constants");
const GoblinEliteInfantryBase = require("../set10E/GoblinEliteInfantry");

class GoblinEliteInfantry extends GoblinEliteInfantryBase {
  constructor (game) {
    super(game, "Goblin Elite Infantry", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GoblinEliteInfantry;
