"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingDeath extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Death", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LivingDeath;
