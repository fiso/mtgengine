"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZuranSpellcasterBase = require("../setCST/ZuranSpellcaster.js");

class ZuranSpellcaster extends ZuranSpellcasterBase {
  constructor(game) {
    super(game, "Zuran Spellcaster", "Ice Age", "ICE");
  }
}

module.exports = ZuranSpellcaster;
