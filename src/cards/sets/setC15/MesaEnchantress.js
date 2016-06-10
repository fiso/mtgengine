"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaEnchantress extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Enchantress", "Commander 2015", "C15");
  }
}

module.exports = MesaEnchantress;
