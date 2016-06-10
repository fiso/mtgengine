"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkirsdagCultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Skirsdag Cultist", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SkirsdagCultist;
