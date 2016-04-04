"use strict";
const Constants = require ("../../../Constants");
const ÆtherSpellbombBase = require("../setARC/ÆtherSpellbomb");

class ÆtherSpellbomb extends ÆtherSpellbombBase {
  constructor(game) {
    super(game, "Æther Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = ÆtherSpellbomb;
