"use strict";
const Constants = require ("../../../Constants");
const RecklessOneBase = require("../setEVG/RecklessOne");

class RecklessOne extends RecklessOneBase {
  constructor (game) {
    super(game, "Reckless One", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = RecklessOne;
