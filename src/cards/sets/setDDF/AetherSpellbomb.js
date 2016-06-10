"use strict";
const Constants = require ("../../../Constants");
const AetherSpellbombBase = require("../setARC/AetherSpellbomb");

class AetherSpellbomb extends AetherSpellbombBase {
  constructor (game) {
    super(game, "Æther Spellbomb", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = AetherSpellbomb;
