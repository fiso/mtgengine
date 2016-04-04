"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KothoftheHammer extends Card {
  constructor(game) {
    super(game, "Koth of the Hammer", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = KothoftheHammer;
