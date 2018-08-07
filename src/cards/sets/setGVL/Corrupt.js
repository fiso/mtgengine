"use strict";
const Constants = require ("../../../Constants");
const CorruptBase = require("../setDVD/Corrupt");

class Corrupt extends CorruptBase {
  constructor (game) {
    super(game, "Corrupt", "Duel Decks Anthology: Garruk vs. Liliana", "GVL");
  }
}

module.exports = Corrupt;
