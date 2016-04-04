"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemoveEnchantments extends Card {
  constructor(game) {
    super(game, "Remove Enchantments", "Legends", "LEG");
  }
}

module.exports = RemoveEnchantments;
