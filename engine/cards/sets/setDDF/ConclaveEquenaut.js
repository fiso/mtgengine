"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConclaveEquenaut extends Card {
  constructor(game) {
    super(game, "Conclave Equenaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ConclaveEquenaut;
