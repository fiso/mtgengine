"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScrollThief extends Card {
  constructor(game) {
    super(game, "Scroll Thief", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = ScrollThief;
