"use strict";
const Constants = require ("../../../Constants");
const ZuranSpellcasterBase = require("../setCST/ZuranSpellcaster");

class ZuranSpellcaster extends ZuranSpellcasterBase {
  constructor (game) {
    super(game, "Zuran Spellcaster", "Masters Edition II", "ME2");
  }
}

module.exports = ZuranSpellcaster;
