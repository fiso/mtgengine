"use strict";
const Constants = require ("../../../Constants");
const AetherSpellbombBase = require("../setARC/AetherSpellbomb");

class AetherSpellbomb extends AetherSpellbombBase {
  constructor (game) {
    super(game, "Æther Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = AetherSpellbomb;
