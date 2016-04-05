"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalInterrogator extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Interrogator", "Scourge", "SCG");
  }
}

module.exports = CabalInterrogator;
