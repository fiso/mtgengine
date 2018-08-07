"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaEnchantress extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Enchantress", "Eternal Masters", "EMA");
  }
}

module.exports = MesaEnchantress;
