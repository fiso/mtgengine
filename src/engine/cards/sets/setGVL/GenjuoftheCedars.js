"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenjuoftheCedars extends UnimplementedCard {
  constructor (game) {
    super(game, "Genju of the Cedars", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = GenjuoftheCedars;
