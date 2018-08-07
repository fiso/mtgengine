"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealingHands extends UnimplementedCard {
  constructor (game) {
    super(game, "Healing Hands", "Magic Origins", "ORI");
  }
}

module.exports = HealingHands;
