"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalSurgeon extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Surgeon", "Torment", "TOR");
  }
}

module.exports = CabalSurgeon;
