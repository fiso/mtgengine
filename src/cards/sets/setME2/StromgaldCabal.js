"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromgaldCabal extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromgald Cabal", "Masters Edition II", "ME2");
  }
}

module.exports = StromgaldCabal;
