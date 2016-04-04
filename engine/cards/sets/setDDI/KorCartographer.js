"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorCartographer extends Card {
  constructor(game) {
    super(game, "Kor Cartographer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = KorCartographer;
