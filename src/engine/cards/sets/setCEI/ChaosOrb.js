"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosOrb extends UnimplementedCard {
  constructor (game) {
    super(game, "Chaos Orb", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = ChaosOrb;
