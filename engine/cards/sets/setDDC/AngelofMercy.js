"use strict";
const Constants = require ("../../../Constants");
const AngelofMercyBase = require("../setDD3_DVD/AngelofMercy");

class AngelofMercy extends AngelofMercyBase {
  constructor(game) {
    super(game, "Angel of Mercy", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = AngelofMercy;
