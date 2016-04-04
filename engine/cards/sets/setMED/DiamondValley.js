"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DiamondValleyBase = require("../setARN/DiamondValley.js");

class DiamondValley extends DiamondValleyBase {
  constructor(game) {
    super(game, "Diamond Valley", "Masters Edition", "MED");
  }
}

module.exports = DiamondValley;
