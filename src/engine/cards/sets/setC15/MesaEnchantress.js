"use strict";
const Constants = require ("../../../Constants");
const MesaEnchantressBase = require("../setEMA/MesaEnchantress");

class MesaEnchantress extends MesaEnchantressBase {
  constructor (game) {
    super(game, "Mesa Enchantress", "Commander 2015", "C15");
  }
}

module.exports = MesaEnchantress;
