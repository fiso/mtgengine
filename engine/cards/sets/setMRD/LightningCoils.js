"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningCoils extends Card {
  constructor(game) {
    super(game, "Lightning Coils", "Mirrodin", "MRD");
  }
}

module.exports = LightningCoils;
