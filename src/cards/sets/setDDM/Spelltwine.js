"use strict";
const Constants = require ("../../../Constants");
const SpelltwineBase = require("../setC17/Spelltwine");

class Spelltwine extends SpelltwineBase {
  constructor (game) {
    super(game, "Spelltwine", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = Spelltwine;
