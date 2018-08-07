"use strict";
const Constants = require ("../../../Constants");
const ElvishPromenadeBase = require("../setEVG/ElvishPromenade");

class ElvishPromenade extends ElvishPromenadeBase {
  constructor (game) {
    super(game, "Elvish Promenade", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = ElvishPromenade;
