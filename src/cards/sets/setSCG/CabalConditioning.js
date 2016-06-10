"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalConditioning extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Conditioning", "Scourge", "SCG");
  }
}

module.exports = CabalConditioning;
