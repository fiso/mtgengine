"use strict";
const Constants = require ("../../../Constants");
const CorruptBase = require("../setDD3_DVD/Corrupt");

class Corrupt extends CorruptBase {
  constructor (game) {
    super(game, "Corrupt", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Corrupt;
