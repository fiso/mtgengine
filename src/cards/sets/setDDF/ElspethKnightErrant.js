"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElspethKnightErrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Elspeth, Knight-Errant", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ElspethKnightErrant;
