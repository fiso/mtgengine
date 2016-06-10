"use strict";
const Constants = require ("../../../Constants");
const SpellbookBase = require("../set8ED/Spellbook");

class Spellbook extends SpellbookBase {
  constructor (game) {
    super(game, "Spellbook", "Exodus", "EXO");
  }
}

module.exports = Spellbook;
