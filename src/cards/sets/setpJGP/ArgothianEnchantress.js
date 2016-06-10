"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianEnchantress extends UnimplementedCard {
  constructor (game) {
    super(game, "Argothian Enchantress", "Judge Gift Program", "pJGP");
  }
}

module.exports = ArgothianEnchantress;
