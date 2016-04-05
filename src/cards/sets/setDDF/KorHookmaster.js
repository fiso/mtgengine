"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KorHookmaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Kor Hookmaster", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KorHookmaster;
