"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RishkarsExpertise extends UnimplementedCard {
  constructor (game) {
    super(game, "Rishkar's Expertise", "Aether Revolt", "AER");
  }
}

module.exports = RishkarsExpertise;
