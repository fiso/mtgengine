"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeroicIntervention extends UnimplementedCard {
  constructor (game) {
    super(game, "Heroic Intervention", "Aether Revolt", "AER");
  }
}

module.exports = HeroicIntervention;
