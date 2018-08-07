"use strict";
const Constants = require ("../../../Constants");
const MoggFanaticBase = require("../setEMA/MoggFanatic");

class MoggFanatic extends MoggFanaticBase {
  constructor (game) {
    super(game, "Mogg Fanatic", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = MoggFanatic;
