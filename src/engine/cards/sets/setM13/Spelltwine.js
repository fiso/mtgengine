"use strict";
const Constants = require ("../../../Constants");
const SpelltwineBase = require("../setC17/Spelltwine");

class Spelltwine extends SpelltwineBase {
  constructor (game) {
    super(game, "Spelltwine", "Magic 2013", "M13");
  }
}

module.exports = Spelltwine;
