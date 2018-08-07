"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalStronghold extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Stronghold", "Dominaria", "DOM");
  }
}

module.exports = CabalStronghold;
