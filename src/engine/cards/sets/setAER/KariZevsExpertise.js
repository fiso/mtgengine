"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KariZevsExpertise extends UnimplementedCard {
  constructor (game) {
    super(game, "Kari Zev's Expertise", "Aether Revolt", "AER");
  }
}

module.exports = KariZevsExpertise;
