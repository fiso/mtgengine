"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalTorturer extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Torturer", "Torment", "TOR");
  }
}

module.exports = CabalTorturer;
