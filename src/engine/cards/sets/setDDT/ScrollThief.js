"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrollThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Scroll Thief", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = ScrollThief;
