"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EliteVanguard extends Card {
  constructor(game) {
    super(game, "Elite Vanguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EliteVanguard;
