"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaBloom extends UnimplementedCard {
  constructor(game) {
    super(game, "Mana Bloom", "Return to Ravnica", "RTR");
  }
}

module.exports = ManaBloom;
