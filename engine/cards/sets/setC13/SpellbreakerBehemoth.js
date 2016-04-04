"use strict";
const Constants = require ("../../../Constants");
const SpellbreakerBehemothBase = require("../setARB/SpellbreakerBehemoth");

class SpellbreakerBehemoth extends SpellbreakerBehemothBase {
  constructor(game) {
    super(game, "Spellbreaker Behemoth", "Commander 2013 Edition", "C13");
  }
}

module.exports = SpellbreakerBehemoth;
