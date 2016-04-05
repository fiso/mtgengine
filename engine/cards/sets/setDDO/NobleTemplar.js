"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NobleTemplar extends UnimplementedCard {
  constructor(game) {
    super(game, "Noble Templar", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NobleTemplar;
