"use strict";
const Constants = require ("../../../Constants");
const SootImpBase = require("../setDVD/SootImp");

class SootImp extends SootImpBase {
  constructor (game) {
    super(game, "Soot Imp", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = SootImp;
