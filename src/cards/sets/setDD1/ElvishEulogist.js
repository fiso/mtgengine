"use strict";
const Constants = require ("../../../Constants");
const ElvishEulogistBase = require("../setEVG/ElvishEulogist");

class ElvishEulogist extends ElvishEulogistBase {
  constructor (game) {
    super(game, "Elvish Eulogist", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = ElvishEulogist;
