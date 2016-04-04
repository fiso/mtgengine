"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LivingLore extends Card {
  constructor(game) {
    super(game, "Living Lore", "Dragons of Tarkir", "DTK");
  }
}

module.exports = LivingLore;
