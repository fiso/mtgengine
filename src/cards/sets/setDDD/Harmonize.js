"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setARC/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = Harmonize;
