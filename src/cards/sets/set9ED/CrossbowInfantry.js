"use strict";
const Constants = require ("../../../Constants");
const CrossbowInfantryBase = require("../set8ED/CrossbowInfantry");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor(game) {
    super(game, "Crossbow Infantry", "Ninth Edition", "9ED");
  }
}

module.exports = CrossbowInfantry;
