"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeedlessOneBase = require("../setDD3_EVG/HeedlessOne.js");

class HeedlessOne extends HeedlessOneBase {
  constructor(game) {
    super(game, "Heedless One", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = HeedlessOne;
