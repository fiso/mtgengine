"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EnchantmentAlterationBase = require("../setCHR/EnchantmentAlteration.js");

class EnchantmentAlteration extends EnchantmentAlterationBase {
  constructor(game) {
    super(game, "Enchantment Alteration", "Urza's Saga", "USG");
  }
}

module.exports = EnchantmentAlteration;
