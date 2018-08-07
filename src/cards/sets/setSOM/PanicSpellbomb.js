"use strict";
const Constants = require ("../../../Constants");
const PanicSpellbombBase = require("../setCM2/PanicSpellbomb");

class PanicSpellbomb extends PanicSpellbombBase {
  constructor (game) {
    super(game, "Panic Spellbomb", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PanicSpellbomb;
