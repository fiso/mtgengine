"use strict";
const Constants = require ("../../../Constants");
const CoalitionRelicBase = require("../setA25/CoalitionRelic");

class CoalitionRelic extends CoalitionRelicBase {
  constructor (game) {
    super(game, "Coalition Relic", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = CoalitionRelic;
