"use strict";
const Constants = require ("../../../Constants");
const CrossbowInfantryBase = require("../set9ED/CrossbowInfantry");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor (game) {
    super(game, "Crossbow Infantry", "Eighth Edition", "8ED");
  }
}

module.exports = CrossbowInfantry;
