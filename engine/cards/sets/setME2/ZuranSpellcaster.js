"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZuranSpellcasterBase = require("../setCST/ZuranSpellcaster.js");

class ZuranSpellcaster extends ZuranSpellcasterBase {
  constructor(game) {
    super(game, "Zuran Spellcaster", "Masters Edition II", "ME2");
  }
}

module.exports = ZuranSpellcaster;
