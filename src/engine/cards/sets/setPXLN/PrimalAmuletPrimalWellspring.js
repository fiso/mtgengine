"use strict";
const Constants = require ("../../../Constants");
const PrimalAmuletPrimalWellspringBase = require("../setPXTC/PrimalAmuletPrimalWellspring");

class PrimalAmuletPrimalWellspring extends PrimalAmuletPrimalWellspringBase {
  constructor (game) {
    super(game, "Primal Amulet // Primal Wellspring", "Ixalan Promos", "PXLN");
  }
}

module.exports = PrimalAmuletPrimalWellspring;
