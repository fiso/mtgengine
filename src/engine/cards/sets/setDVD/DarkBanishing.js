"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setTPR/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor (game) {
    super(game, "Dark Banishing", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = DarkBanishing;
