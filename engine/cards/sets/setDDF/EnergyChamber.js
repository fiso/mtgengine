"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnergyChamber extends Card {
  constructor(game) {
    super(game, "Energy Chamber", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = EnergyChamber;
