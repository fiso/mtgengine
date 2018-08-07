"use strict";
const Constants = require ("../../../Constants");
const SpellCrumpleBase = require("../setCM2/SpellCrumple");

class SpellCrumple extends SpellCrumpleBase {
  constructor (game) {
    super(game, "Spell Crumple", "Commander 2011", "CMD");
  }
}

module.exports = SpellCrumple;
