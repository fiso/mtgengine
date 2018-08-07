"use strict";
const Constants = require ("../../../Constants");
const KorHookmasterBase = require("../setMM3/KorHookmaster");

class KorHookmaster extends KorHookmasterBase {
  constructor (game) {
    super(game, "Kor Hookmaster", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = KorHookmaster;
