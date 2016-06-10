"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimevalTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Primeval Titan", "Grand Prix", "pGPX");
  }
}

module.exports = PrimevalTitan;
