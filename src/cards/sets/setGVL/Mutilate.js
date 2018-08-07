"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mutilate extends UnimplementedCard {
  constructor (game) {
    super(game, "Mutilate", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Mutilate;
