"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingDeath extends UnimplementedCard {
  constructor (game) {
    super(game, "Living Death", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = LivingDeath;
