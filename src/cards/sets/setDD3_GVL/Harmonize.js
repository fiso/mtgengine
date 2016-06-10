"use strict";
const Constants = require ("../../../Constants");
const HarmonizeBase = require("../setARC/Harmonize");

class Harmonize extends HarmonizeBase {
  constructor (game) {
    super(game, "Harmonize", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Harmonize;
