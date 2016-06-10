"use strict";
const Constants = require ("../../../Constants");
const WildsizeBase = require("../setDD3_EVG/Wildsize");

class Wildsize extends WildsizeBase {
  constructor (game) {
    super(game, "Wildsize", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Wildsize;
