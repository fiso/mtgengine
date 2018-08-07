"use strict";
const Constants = require ("../../../Constants");
const SpellbreakerBehemothBase = require("../setC13/SpellbreakerBehemoth");

class SpellbreakerBehemoth extends SpellbreakerBehemothBase {
  constructor (game) {
    super(game, "Spellbreaker Behemoth", "Alara Reborn", "ARB");
  }
}

module.exports = SpellbreakerBehemoth;
