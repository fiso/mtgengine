"use strict";
const Constants = require ("../../../Constants");
const ArgothianEnchantressBase = require("../setEMA/ArgothianEnchantress");

class ArgothianEnchantress extends ArgothianEnchantressBase {
  constructor (game) {
    super(game, "Argothian Enchantress", "Magic Online Promos", "PRM");
  }
}

module.exports = ArgothianEnchantress;
