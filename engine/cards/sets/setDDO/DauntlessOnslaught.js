"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DauntlessOnslaught extends Card {
  constructor(game) {
    super(game, "Dauntless Onslaught", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = DauntlessOnslaught;
