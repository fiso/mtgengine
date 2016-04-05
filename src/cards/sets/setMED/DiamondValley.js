"use strict";
const Constants = require ("../../../Constants");
const DiamondValleyBase = require("../setARN/DiamondValley");

class DiamondValley extends DiamondValleyBase {
  constructor(game) {
    super(game, "Diamond Valley", "Masters Edition", "MED");
  }
}

module.exports = DiamondValley;
