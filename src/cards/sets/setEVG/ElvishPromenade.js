"use strict";
const Constants = require ("../../../Constants");
const ElvishPromenadeBase = require("../setDD3_EVG/ElvishPromenade");

class ElvishPromenade extends ElvishPromenadeBase {
  constructor(game) {
    super(game, "Elvish Promenade", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishPromenade;
