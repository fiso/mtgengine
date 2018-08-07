"use strict";
const Constants = require ("../../../Constants");
const AbundanceBase = require("../setC17/Abundance");

class Abundance extends AbundanceBase {
  constructor (game) {
    super(game, "Abundance", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Abundance;
