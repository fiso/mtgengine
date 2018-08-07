"use strict";
const Constants = require ("../../../Constants");
const EnchantmentAlterationBase = require("../setUSG/EnchantmentAlteration");

class EnchantmentAlteration extends EnchantmentAlterationBase {
  constructor (game) {
    super(game, "Enchantment Alteration", "Chronicles", "CHR");
  }
}

module.exports = EnchantmentAlteration;
