"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerduranEmissary extends Card {
  constructor(game) {
    super(game, "Verduran Emissary", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = VerduranEmissary;
