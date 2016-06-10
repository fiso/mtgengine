"use strict";
const Constants = require ("../../../Constants");
const SunblastAngelBase = require("../setC14/SunblastAngel");

class SunblastAngel extends SunblastAngelBase {
  constructor (game) {
    super(game, "Sunblast Angel", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = SunblastAngel;
