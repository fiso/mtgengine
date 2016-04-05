"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalSlaver extends UnimplementedCard {
  constructor(game) {
    super(game, "Cabal Slaver", "Onslaught", "ONS");
  }
}

module.exports = CabalSlaver;
