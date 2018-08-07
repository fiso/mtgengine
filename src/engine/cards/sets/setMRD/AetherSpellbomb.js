"use strict";
const Constants = require ("../../../Constants");
const AetherSpellbombBase = require("../setMMA/AetherSpellbomb");

class AetherSpellbomb extends AetherSpellbombBase {
  constructor (game) {
    super(game, "Aether Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = AetherSpellbomb;
