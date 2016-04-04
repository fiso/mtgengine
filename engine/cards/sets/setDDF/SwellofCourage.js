"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SwellofCourage extends Card {
  constructor(game) {
    super(game, "Swell of Courage", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SwellofCourage;
