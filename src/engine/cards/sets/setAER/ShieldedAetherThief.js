"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldedAetherThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Shielded Aether Thief", "Aether Revolt", "AER");
  }
}

module.exports = ShieldedAetherThief;
