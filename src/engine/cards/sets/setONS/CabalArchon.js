"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalArchon extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Archon", "Onslaught", "ONS");
  }
}

module.exports = CabalArchon;
