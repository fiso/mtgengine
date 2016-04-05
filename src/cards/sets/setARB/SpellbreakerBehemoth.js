"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellbreakerBehemoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Spellbreaker Behemoth", "Alara Reborn", "ARB");
  }
}

module.exports = SpellbreakerBehemoth;
