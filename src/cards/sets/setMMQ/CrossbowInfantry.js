"use strict";
const Constants = require ("../../../Constants");
const CrossbowInfantryBase = require("../set9ED/CrossbowInfantry");

class CrossbowInfantry extends CrossbowInfantryBase {
  constructor (game) {
    super(game, "Crossbow Infantry", "Mercadian Masques", "MMQ");
  }
}

module.exports = CrossbowInfantry;
