"use strict";
const Constants = require ("../../../Constants");
const PyriteSpellbombBase = require("../setDDU/PyriteSpellbomb");

class PyriteSpellbomb extends PyriteSpellbombBase {
  constructor (game) {
    super(game, "Pyrite Spellbomb", "Modern Masters", "MMA");
  }
}

module.exports = PyriteSpellbomb;
