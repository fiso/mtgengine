"use strict";
const Constants = require ("../../../Constants");
const PyriteSpellbombBase = require("../setMRD/PyriteSpellbomb");

class PyriteSpellbomb extends PyriteSpellbombBase {
  constructor (game) {
    super(game, "Pyrite Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = PyriteSpellbomb;
