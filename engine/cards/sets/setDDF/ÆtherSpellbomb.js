"use strict";
const Constants = require ("../../../Constants");
const ÆtherSpellbombBase = require("../setARC/ÆtherSpellbomb");

class ÆtherSpellbomb extends ÆtherSpellbombBase {
  constructor(game) {
    super(game, "Æther Spellbomb", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ÆtherSpellbomb;
