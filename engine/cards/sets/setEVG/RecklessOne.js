"use strict";
const Constants = require ("../../../Constants");
const RecklessOneBase = require("../setDD3_EVG/RecklessOne");

class RecklessOne extends RecklessOneBase {
  constructor(game) {
    super(game, "Reckless One", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = RecklessOne;
