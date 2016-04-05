"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setCST/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor(game) {
    super(game, "Dark Banishing", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = DarkBanishing;
