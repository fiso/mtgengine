"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurrentonBombardier extends UnimplementedCard {
  constructor(game) {
    super(game, "Burrenton Bombardier", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = BurrentonBombardier;
