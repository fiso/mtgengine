"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FeveredStrengthBase = require("../setALL/FeveredStrength.js");

class FeveredStrength extends FeveredStrengthBase {
  constructor(game) {
    super(game, "Fevered Strength", "Masters Edition III", "ME3");
  }
}

module.exports = FeveredStrength;
