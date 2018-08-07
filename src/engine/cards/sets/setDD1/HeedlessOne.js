"use strict";
const Constants = require ("../../../Constants");
const HeedlessOneBase = require("../setEVG/HeedlessOne");

class HeedlessOne extends HeedlessOneBase {
  constructor (game) {
    super(game, "Heedless One", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = HeedlessOne;
