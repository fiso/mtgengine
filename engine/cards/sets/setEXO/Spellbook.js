"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellbookBase = require("../set8ED/Spellbook.js");

class Spellbook extends SpellbookBase {
  constructor(game) {
    super(game, "Spellbook", "Exodus", "EXO");
  }
}

module.exports = Spellbook;
