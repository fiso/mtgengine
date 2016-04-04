"use strict";
const Constants = require ("../../../Constants");
const SpellbookBase = require("../set8ED/Spellbook");

class Spellbook extends SpellbookBase {
  constructor(game) {
    super(game, "Spellbook", "Magic 2010", "M10");
  }
}

module.exports = Spellbook;
