"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RusticClachan extends Card {
  constructor(game) {
    super(game, "Rustic Clachan", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = RusticClachan;
