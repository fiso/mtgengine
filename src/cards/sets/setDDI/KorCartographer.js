"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorCartographer extends UnimplementedCard {
  constructor (game) {
    super(game, "Kor Cartographer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = KorCartographer;
