"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deathgreeter extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathgreeter", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Deathgreeter;
