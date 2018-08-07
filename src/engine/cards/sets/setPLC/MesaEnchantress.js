"use strict";
const Constants = require ("../../../Constants");
const MesaEnchantressBase = require("../setEMA/MesaEnchantress");

class MesaEnchantress extends MesaEnchantressBase {
  constructor (game) {
    super(game, "Mesa Enchantress", "Planar Chaos", "PLC");
  }
}

module.exports = MesaEnchantress;
