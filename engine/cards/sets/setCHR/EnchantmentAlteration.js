"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnchantmentAlteration extends Card {
  constructor(game) {
    super(game, "Enchantment Alteration", "Chronicles", "CHR");
  }
}

module.exports = EnchantmentAlteration;
