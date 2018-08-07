"use strict";
const Constants = require ("../../../Constants");
const ArgothianEnchantressBase = require("../setEMA/ArgothianEnchantress");

class ArgothianEnchantress extends ArgothianEnchantressBase {
  constructor (game) {
    super(game, "Argothian Enchantress", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianEnchantress;
