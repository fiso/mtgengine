"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoalitionRelic extends Card {
  constructor(game) {
    super(game, "Coalition Relic", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = CoalitionRelic;
