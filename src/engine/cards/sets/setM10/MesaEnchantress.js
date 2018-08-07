"use strict";
const Constants = require ("../../../Constants");
const MesaEnchantressBase = require("../setEMA/MesaEnchantress");

class MesaEnchantress extends MesaEnchantressBase {
  constructor (game) {
    super(game, "Mesa Enchantress", "Magic 2010", "M10");
  }
}

module.exports = MesaEnchantress;
