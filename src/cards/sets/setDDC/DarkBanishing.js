"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setCST/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor (game) {
    super(game, "Dark Banishing", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DarkBanishing;
