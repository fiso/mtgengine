"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulswornSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulsworn Spirit", "Return to Ravnica", "RTR");
  }
}

module.exports = SoulswornSpirit;
