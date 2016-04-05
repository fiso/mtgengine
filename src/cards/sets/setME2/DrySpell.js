"use strict";
const Constants = require ("../../../Constants");
const DrySpellBase = require("../set6ED/DrySpell");

class DrySpell extends DrySpellBase {
  constructor(game) {
    super(game, "Dry Spell", "Masters Edition II", "ME2");
  }
}

module.exports = DrySpell;
