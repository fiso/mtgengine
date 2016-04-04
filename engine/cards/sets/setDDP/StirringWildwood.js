"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StirringWildwood extends Card {
  constructor(game) {
    super(game, "Stirring Wildwood", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = StirringWildwood;
