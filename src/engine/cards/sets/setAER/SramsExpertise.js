"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SramsExpertise extends UnimplementedCard {
  constructor (game) {
    super(game, "Sram's Expertise", "Aether Revolt", "AER");
  }
}

module.exports = SramsExpertise;
