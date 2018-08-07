"use strict";
const Constants = require ("../../../Constants");
const SigilBlessingBase = require("../setMM2/SigilBlessing");

class SigilBlessing extends SigilBlessingBase {
  constructor (game) {
    super(game, "Sigil Blessing", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = SigilBlessing;
