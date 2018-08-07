"use strict";
const Constants = require ("../../../Constants");
const DaggerclawImpBase = require("../setMM2/DaggerclawImp");

class DaggerclawImp extends DaggerclawImpBase {
  constructor (game) {
    super(game, "Daggerclaw Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = DaggerclawImp;
