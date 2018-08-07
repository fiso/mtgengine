"use strict";
const Constants = require ("../../../Constants");
const SpellbookBase = require("../setM10/Spellbook");

class Spellbook extends SpellbookBase {
  constructor (game) {
    super(game, "Spellbook", "Tenth Edition", "10E");
  }
}

module.exports = Spellbook;
