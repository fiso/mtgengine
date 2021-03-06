"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RudeAwakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Rude Awakening", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = RudeAwakening;
