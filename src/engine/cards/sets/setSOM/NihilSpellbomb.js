"use strict";
const Constants = require ("../../../Constants");
const NihilSpellbombBase = require("../setA25/NihilSpellbomb");

class NihilSpellbomb extends NihilSpellbombBase {
  constructor (game) {
    super(game, "Nihil Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NihilSpellbomb;
