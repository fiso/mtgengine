"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConclavePhalanx extends UnimplementedCard {
  constructor(game) {
    super(game, "Conclave Phalanx", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ConclavePhalanx;
