"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StealEnchantment extends UnimplementedCard {
  constructor (game) {
    super(game, "Steal Enchantment", "Tempest", "TMP");
  }
}

module.exports = StealEnchantment;
