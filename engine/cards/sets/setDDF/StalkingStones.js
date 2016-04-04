"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StalkingStones extends Card {
  constructor(game) {
    super(game, "Stalking Stones", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = StalkingStones;
