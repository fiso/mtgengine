"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianEnchantress extends UnimplementedCard {
  constructor (game) {
    super(game, "Argothian Enchantress", "Eternal Masters", "EMA");
  }
}

module.exports = ArgothianEnchantress;
