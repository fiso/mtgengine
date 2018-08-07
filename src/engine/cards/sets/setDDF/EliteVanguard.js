"use strict";
const Constants = require ("../../../Constants");
const EliteVanguardBase = require("../setEMA/EliteVanguard");

class EliteVanguard extends EliteVanguardBase {
  constructor (game) {
    super(game, "Elite Vanguard", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EliteVanguard;
