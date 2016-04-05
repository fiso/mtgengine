"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnchantedBeing extends UnimplementedCard {
  constructor(game) {
    super(game, "Enchanted Being", "Legends", "LEG");
  }
}

module.exports = EnchantedBeing;
