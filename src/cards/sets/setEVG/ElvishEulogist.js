"use strict";
const Constants = require ("../../../Constants");
const ElvishEulogistBase = require("../setDD3_EVG/ElvishEulogist");

class ElvishEulogist extends ElvishEulogistBase {
  constructor (game) {
    super(game, "Elvish Eulogist", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishEulogist;
