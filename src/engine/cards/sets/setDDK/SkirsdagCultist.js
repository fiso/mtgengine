"use strict";
const Constants = require ("../../../Constants");
const SkirsdagCultistBase = require("../setMM3/SkirsdagCultist");

class SkirsdagCultist extends SkirsdagCultistBase {
  constructor (game) {
    super(game, "Skirsdag Cultist", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = SkirsdagCultist;
