"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SilverMyr extends Card {
  constructor(game) {
    super(game, "Silver Myr", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = SilverMyr;
