"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimevalShambler extends UnimplementedCard {
  constructor (game) {
    super(game, "Primeval Shambler", "Eighth Edition", "8ED");
  }
}

module.exports = PrimevalShambler;
