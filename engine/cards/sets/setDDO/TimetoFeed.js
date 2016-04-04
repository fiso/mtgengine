"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimetoFeed extends UnimplementedCard {
  constructor(game) {
    super(game, "Time to Feed", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = TimetoFeed;
