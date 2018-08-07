"use strict";
const Constants = require ("../../../Constants");
const ZuranSpellcasterBase = require("../setME2/ZuranSpellcaster");

class ZuranSpellcaster extends ZuranSpellcasterBase {
  constructor (game) {
    super(game, "Zuran Spellcaster", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = ZuranSpellcaster;
