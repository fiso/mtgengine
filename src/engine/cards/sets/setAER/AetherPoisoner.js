"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherPoisoner extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Poisoner", "Aether Revolt", "AER");
  }
}

module.exports = AetherPoisoner;
