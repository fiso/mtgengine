"use strict";
const Constants = require ("../../../Constants");
const SpellPierceBase = require("../setXLN/SpellPierce");

class SpellPierce extends SpellPierceBase {
  constructor (game) {
    super(game, "Spell Pierce", "Modern Masters 2017", "MM3");
  }
}

module.exports = SpellPierce;
