"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SerratedArrows extends UnimplementedCard {
  constructor (game) {
    super(game, "Serrated Arrows", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = SerratedArrows;
