"use strict";
const Constants = require ("../../../Constants");
const DiamondValleyBase = require("../setMED/DiamondValley");

class DiamondValley extends DiamondValleyBase {
  constructor (game) {
    super(game, "Diamond Valley", "Arabian Nights", "ARN");
  }
}

module.exports = DiamondValley;
