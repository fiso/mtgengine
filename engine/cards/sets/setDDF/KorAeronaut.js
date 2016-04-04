"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorAeronaut extends Card {
  constructor(game) {
    super(game, "Kor Aeronaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KorAeronaut;
