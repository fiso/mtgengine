"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromgaldCabal extends UnimplementedCard {
  constructor(game) {
    super(game, "Stromgald Cabal", "Classic Sixth Edition", "6ED");
  }
}

module.exports = StromgaldCabal;
