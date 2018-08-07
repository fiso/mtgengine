"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KothoftheHammer extends UnimplementedCard {
  constructor (game) {
    super(game, "Koth of the Hammer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = KothoftheHammer;
