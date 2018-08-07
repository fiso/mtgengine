"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianaVess extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana Vess", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = LilianaVess;
