"use strict";
const Constants = require ("../../../Constants");
const PanicSpellbombBase = require("../setCM2/PanicSpellbomb");

class PanicSpellbomb extends PanicSpellbombBase {
  constructor (game) {
    super(game, "Panic Spellbomb", "Commander 2014", "C14");
  }
}

module.exports = PanicSpellbomb;
