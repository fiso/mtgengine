"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KiorasFollower extends UnimplementedCard {
  constructor (game) {
    super(game, "Kiora's Follower", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = KiorasFollower;
