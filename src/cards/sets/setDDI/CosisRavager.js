"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CosisRavager extends UnimplementedCard {
  constructor(game) {
    super(game, "Cosi's Ravager", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CosisRavager;
