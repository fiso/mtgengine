"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lignify extends UnimplementedCard {
  constructor (game) {
    super(game, "Lignify", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Lignify;
