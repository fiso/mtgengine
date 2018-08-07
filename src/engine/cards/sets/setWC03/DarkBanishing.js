"use strict";
const Constants = require ("../../../Constants");
const DarkBanishingBase = require("../setTPR/DarkBanishing");

class DarkBanishing extends DarkBanishingBase {
  constructor (game) {
    super(game, "Dark Banishing", "World Championship Decks 2003", "WC03");
  }
}

module.exports = DarkBanishing;
