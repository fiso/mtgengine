"use strict";
const Constants = require ("../../../Constants");
const ArgothianEnchantressBase = require("../setEMA/ArgothianEnchantress");

class ArgothianEnchantress extends ArgothianEnchantressBase {
  constructor (game) {
    super(game, "Argothian Enchantress", "Judge Gift Cards 2003", "G03");
  }
}

module.exports = ArgothianEnchantress;
