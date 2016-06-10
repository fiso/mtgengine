"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContagionClasp extends UnimplementedCard {
  constructor (game) {
    super(game, "Contagion Clasp", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ContagionClasp;
