"use strict";
const Constants = require ("../../../Constants");
const SpellPierceBase = require("../setXLN/SpellPierce");

class SpellPierce extends SpellPierceBase {
  constructor (game) {
    super(game, "Spell Pierce", "Zendikar", "ZEN");
  }
}

module.exports = SpellPierce;
