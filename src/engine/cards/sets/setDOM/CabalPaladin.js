"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalPaladin extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Paladin", "Dominaria", "DOM");
  }
}

module.exports = CabalPaladin;
