"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LivingLore extends UnimplementedCard {
  constructor(game) {
    super(game, "Living Lore", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LivingLore;
