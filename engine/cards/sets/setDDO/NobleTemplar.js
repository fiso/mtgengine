"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NobleTemplar extends Card {
  constructor(game) {
    super(game, "Noble Templar", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NobleTemplar;
