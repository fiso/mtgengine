"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimetoFeed extends Card {
  constructor(game) {
    super(game, "Time to Feed", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = TimetoFeed;
