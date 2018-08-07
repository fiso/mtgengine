"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevenantPatriarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Revenant Patriarch", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = RevenantPatriarch;
