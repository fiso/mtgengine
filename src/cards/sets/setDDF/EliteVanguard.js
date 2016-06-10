"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EliteVanguard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elite Vanguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EliteVanguard;
