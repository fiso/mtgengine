"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnchantmentAlteration extends UnimplementedCard {
  constructor (game) {
    super(game, "Enchantment Alteration", "Chronicles", "CHR");
  }
}

module.exports = EnchantmentAlteration;
