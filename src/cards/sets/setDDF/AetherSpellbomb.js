"use strict";
const Constants = require ("../../../Constants");
const AetherSpellbombBase = require("../setMMA/AetherSpellbomb");

class AetherSpellbomb extends AetherSpellbombBase {
  constructor (game) {
    super(game, "Aether Spellbomb", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AetherSpellbomb;
