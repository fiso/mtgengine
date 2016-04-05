"use strict";
const Constants = require ("../../../Constants");
const ZuranSpellcasterBase = require("../setCST/ZuranSpellcaster");

class ZuranSpellcaster extends ZuranSpellcasterBase {
  constructor(game) {
    super(game, "Zuran Spellcaster", "Ice Age", "ICE");
  }
}

module.exports = ZuranSpellcaster;
