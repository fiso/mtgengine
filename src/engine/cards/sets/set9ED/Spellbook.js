"use strict";
const Constants = require ("../../../Constants");
const SpellbookBase = require("../setM10/Spellbook");

class Spellbook extends SpellbookBase {
  constructor (game) {
    super(game, "Spellbook", "Ninth Edition", "9ED");
  }
}

module.exports = Spellbook;
