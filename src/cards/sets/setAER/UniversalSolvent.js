"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UniversalSolvent extends UnimplementedCard {
  constructor (game) {
    super(game, "Universal Solvent", "Aether Revolt", "AER");
  }
}

module.exports = UniversalSolvent;
