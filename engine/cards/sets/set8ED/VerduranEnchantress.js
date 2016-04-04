"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerduranEnchantressBase = require("../set6ED/VerduranEnchantress.js");

class VerduranEnchantress extends VerduranEnchantressBase {
  constructor(game) {
    super(game, "Verduran Enchantress", "Eighth Edition", "8ED");
  }
}

module.exports = VerduranEnchantress;
