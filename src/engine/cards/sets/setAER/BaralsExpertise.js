"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BaralsExpertise extends UnimplementedCard {
  constructor (game) {
    super(game, "Baral's Expertise", "Aether Revolt", "AER");
  }
}

module.exports = BaralsExpertise;
