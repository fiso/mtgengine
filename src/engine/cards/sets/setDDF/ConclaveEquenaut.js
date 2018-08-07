"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConclaveEquenaut extends UnimplementedCard {
  constructor (game) {
    super(game, "Conclave Equenaut", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ConclaveEquenaut;
