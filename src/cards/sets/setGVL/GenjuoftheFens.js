"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenjuoftheFens extends UnimplementedCard {
  constructor (game) {
    super(game, "Genju of the Fens", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = GenjuoftheFens;
