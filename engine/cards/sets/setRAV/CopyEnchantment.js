"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CopyEnchantment extends UnimplementedCard {
  constructor(game) {
    super(game, "Copy Enchantment", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = CopyEnchantment;
