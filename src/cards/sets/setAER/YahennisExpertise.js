"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YahennisExpertise extends UnimplementedCard {
  constructor (game) {
    super(game, "Yahenni's Expertise", "Aether Revolt", "AER");
  }
}

module.exports = YahennisExpertise;
