"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoalitionRelic extends UnimplementedCard {
  constructor(game) {
    super(game, "Coalition Relic", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = CoalitionRelic;
