"use strict";
const Constants = require ("../../../Constants");
const MesaEnchantressBase = require("../setEMA/MesaEnchantress");

class MesaEnchantress extends MesaEnchantressBase {
  constructor (game) {
    super(game, "Mesa Enchantress", "Magic 2012", "M12");
  }
}

module.exports = MesaEnchantress;
