"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalPit extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Pit", "Odyssey", "ODY");
  }
}

module.exports = CabalPit;
