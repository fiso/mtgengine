"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setATH/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = MoggFanatic;
