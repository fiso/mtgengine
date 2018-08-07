"use strict";
const Constants = require ("../../../Constants");
const AngelofMercyBase = require("../setIMA/AngelofMercy");

class AngelofMercy extends AngelofMercyBase {
  constructor (game) {
    super(game, "Angel of Mercy", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = AngelofMercy;
