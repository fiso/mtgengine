"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setARC/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Harmonize;
