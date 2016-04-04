"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgothianEnchantress extends Card {
  constructor(game) {
    super(game, "Argothian Enchantress", "Judge Gift Program", "pJGP");
  }
}

module.exports = ArgothianEnchantress;
