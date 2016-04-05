"use strict";
const Constants = require ("../../../Constants");
const CrossbowInfantryBase = require("../set8ED/CrossbowInfantry");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor(game) {
    super(game, "Crossbow Infantry", "Seventh Edition", "7ED");
  }
}

module.exports = CrossbowInfantry;
