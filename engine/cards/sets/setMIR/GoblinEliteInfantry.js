"use strict";
const Constants = require ("../../../Constants");
const GoblinEliteInfantryBase = require("../set6ED/GoblinEliteInfantry");

class GoblinEliteInfantry extends GoblinEliteInfantryBase {
  constructor(game) {
    super(game, "Goblin Elite Infantry", "Mirage", "MIR");
  }
}

module.exports = GoblinEliteInfantry;
