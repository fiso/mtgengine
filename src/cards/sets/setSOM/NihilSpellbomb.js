"use strict";
const Constants = require ("../../../Constants");
const NihilSpellbombBase = require("../setC13/NihilSpellbomb");

class NihilSpellbomb extends NihilSpellbombBase {
  constructor (game) {
    super(game, "Nihil Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = NihilSpellbomb;
