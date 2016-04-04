"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JourneytoNowhere extends Card {
  constructor(game) {
    super(game, "Journey to Nowhere", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = JourneytoNowhere;
