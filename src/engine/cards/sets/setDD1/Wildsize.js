"use strict";
const Constants = require ("../../../Constants");
const WildsizeBase = require("../setIMA/Wildsize");

class Wildsize extends WildsizeBase {
  constructor (game) {
    super(game, "Wildsize", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = Wildsize;
