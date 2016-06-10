"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningCoils extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Coils", "Mirrodin", "MRD");
  }
}

module.exports = LightningCoils;
