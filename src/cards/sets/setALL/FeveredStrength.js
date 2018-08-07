"use strict";
const Constants = require ("../../../Constants");
const FeveredStrengthBase = require("../setME3/FeveredStrength");

class FeveredStrength extends FeveredStrengthBase {
  constructor (game) {
    super(game, "Fevered Strength", "Alliances", "ALL");
  }
}

module.exports = FeveredStrength;
