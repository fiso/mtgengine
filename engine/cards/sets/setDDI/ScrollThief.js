"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScrollThief extends UnimplementedCard {
  constructor(game) {
    super(game, "Scroll Thief", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = ScrollThief;
