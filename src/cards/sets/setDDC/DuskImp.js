"use strict";
const Constants = require ("../../../Constants");
const DuskImpBase = require("../setDD3_DVD/DuskImp");

class DuskImp extends DuskImpBase {
  constructor (game) {
    super(game, "Dusk Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DuskImp;
