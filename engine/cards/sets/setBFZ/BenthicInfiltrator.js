"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BenthicInfiltrator extends UnimplementedCard {
  constructor(game) {
    super(game, "Benthic Infiltrator", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BenthicInfiltrator;
