"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalAmuletPrimalWellspring extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Amulet // Primal Wellspring", "XLN Treasure Chest", "PXTC");
  }
}

module.exports = PrimalAmuletPrimalWellspring;
