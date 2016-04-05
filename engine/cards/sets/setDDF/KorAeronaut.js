"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorAeronaut extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Aeronaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KorAeronaut;
