"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpellbookBase = require("../set8ED/Spellbook.js");

class Spellbook extends SpellbookBase {
  constructor(game) {
    super(game, "Spellbook", "Tenth Edition", "10E");
  }
}

module.exports = Spellbook;
