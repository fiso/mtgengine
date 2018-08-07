"use strict";
const Constants = require ("../../../Constants");
const SimicGrowthChamberBase = require("../setC18/SimicGrowthChamber");

class SimicGrowthChamber extends SimicGrowthChamberBase {
  constructor (game) {
    super(game, "Simic Growth Chamber", "Commander 2015", "C15");
  }
}

module.exports = SimicGrowthChamber;
