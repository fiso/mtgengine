"use strict";
const Constants = require ("../../../Constants");
const SpellheartChimeraBase = require("../setDDS/SpellheartChimera");

class SpellheartChimera extends SpellheartChimeraBase {
  constructor (game) {
    super(game, "Spellheart Chimera", "Theros", "THS");
  }
}

module.exports = SpellheartChimera;
