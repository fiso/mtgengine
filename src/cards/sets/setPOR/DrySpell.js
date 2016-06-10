"use strict";
const Constants = require ("../../../Constants");
const DrySpellBase = require("../set6ED/DrySpell");

class DrySpell extends DrySpellBase {
  constructor (game) {
    super(game, "Dry Spell", "Portal", "POR");
  }
}

module.exports = DrySpell;
