"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalPlasma extends UnimplementedCard {
  constructor(game) {
    super(game, "Primal Plasma", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PrimalPlasma;
