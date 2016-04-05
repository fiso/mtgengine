"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemoveEnchantments extends UnimplementedCard {
  constructor(game) {
    super(game, "Remove Enchantments", "Legends", "LEG");
  }
}

module.exports = RemoveEnchantments;
