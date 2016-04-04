"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ContagionClasp extends Card {
  constructor(game) {
    super(game, "Contagion Clasp", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ContagionClasp;
